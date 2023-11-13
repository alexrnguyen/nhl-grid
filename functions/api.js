import express, { Router } from "express";
import serverless from "serverless-http";
import { generateAbbreviationMap } from "../src/controllers/game-controller";

const api = express();
api.use(express.json());

const router = Router();

let formattedName = "";
router.get("/player/:playerName", async (req, res) => {
  const playerName = req.params.playerName;
  // TO-DO: Handle errors for this request
  const response = await fetch(
    `https://search.d3.nhle.com/api/v1/search/player?culture=en-us&limit=20&q=${playerName}`
  );

  const data = await response.json();
  res.status(200).send(data);
});

router.get("/player/:id", async (req, res) => {
  const playerId = req.params.id;
  const playerObject = await fetch(
    `https://api-web.nhle.com/v1/player/${playerId}/landing`
  );
  const playerData = await playerObject.json();
  res.status(200).send(playerData);
});

router.get("/player/teams/:id", async (req, res) => {
  const playerId = req.params.id;
  let allTeams = [];
  const playerObject = await fetch(
    `https://api-web.nhle.com/v1/player/${playerId}/landing`
  );
  const playerData = await playerObject.json();

  const seasonTotals = playerData.data.seasonTotals;
  Array.from(seasonTotals).forEach((season) => {
    allTeams.push(season.teamName.default);
  });
  let distinctTeams = [...new Set(allTeams)];
  res.status(200).send(distinctTeams);
});

router.get("/teams", async (req, res) => {
  const response = await fetch("https://api.nhle.com/stats/rest/en/team");
  const data = await response.json();
  const teams = data.data;
  const abbreviationToTeamMap = generateAbbreviationMap();
  let teamsAbbreviations = [];
  teams.forEach((team) => {
    for (let key of abbreviationToTeamMap.keys()) {
      if (key === team.triCode) {
        teamsAbbreviations.push(team.triCode);
      }
    }
  });
  res.status(200).send(teamsAbbreviations);
});

api.use("/api/", router);

export const handler = serverless(api);
