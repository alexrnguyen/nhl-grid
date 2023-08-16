const { default: axios } = require("axios");
const express = require("express");
const app = express();
const cors = require("cors");

// Source: https://stackoverflow.com/questions/45975135/access-control-origin-header-error-using-axios
app.use(cors());
app.use(express.json());

let formattedName = "";
const PORT = process.env.PORT || 3000;

app.get("/", async function (req, res) {
  const response = await axios.get(
    `https://suggest.svc.nhl.com/svc/suggest/v1/minplayers/${formattedName}`
  );
  console.log(await response.data.suggestions);
  res.send(await response.data.suggestions);
});

app.post("/", (req, res) => {
  console.log(req.body);
  formattedName = req.body.name;
  res.end();
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
