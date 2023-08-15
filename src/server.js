const { default: axios } = require("axios");
const express = require("express");
const cors = require("cors");
const app = express();

// Source: https://stackoverflow.com/questions/45975135/access-control-origin-header-error-using-axios
app.use(express.json());
app.use(cors());

let formattedName = "";
const PORT = process.env.PORT || 3000;
let headers = new Headers();
headers.append("Access-Control-Allow-Origin", "*");

app.get("/", async function (req, res) {
  const response = await axios.get(
    `https://suggest.svc.nhl.com/svc/suggest/v1/minplayers/${formattedName}`,
    { headers: headers }
  );
  res.json(await response.json());
});

app.post("/", (req, res) => {
  formattedName = req.body.parcel;
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
