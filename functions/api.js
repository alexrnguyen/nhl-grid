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
  res.send(data);
});

api.use("/api/", router);

export const handler = serverless(api);
