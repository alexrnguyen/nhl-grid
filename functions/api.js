import express, { Router } from "express";
import serverless from "serverless-http";
const { default: axios } = require("axios");

const api = express();
api.use(express.json());

const router = Router();

let formattedName = "";
router.get("/search-player", async (req, res) => {
  // TO-DO: Handle errors for this request
  const response = await axios.get(
    `https://suggest.svc.nhl.com/svc/suggest/v1/minplayers/${formattedName}`
  );
  console.log(await response.data.suggestions);
  res.send(await response.data.suggestions);
});

router.post("/get-player", (req, res) => {
  console.log(req.body);
  formattedName = req.body.name;
  res.end();
});

api.use("/.netlify/functions/api/", router);

export const handler = serverless(api);
