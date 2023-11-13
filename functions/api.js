import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();
api.use(express.json());

const router = Router();

let formattedName = "";
router.get("/player/:playerName", async (req, res) => {
  // TO-DO: Handle errors for this request
  const response = await fetch(
    `https://search.d3.nhle.com/api/v1/search/player?culture=en-us&limit=20&q=${req.params.playerName}`
  );

  const data = await response.json();
  res.status(200).send(data);
});

router.get("/teams", async (req, res) => {
  const response = await axios.get("https://api.nhle.com/stats/rest/en/team");
  const teams = response.data;
  const abbreviationToTeamMap = generateAbbreviationMap();
  let teamsAbbreviations = [];
  teams.forEach((team) => {
    if (abbreviationToTeamMap.keys().includes(team.triCode)) {
      teamsAbbreviations.push(team.triCode);
    }
  });
  res.status(200).send(teamsAbbreviations);
});

api.use("/api/", router);

export const handler = serverless(api);
