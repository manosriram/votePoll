const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");
const rating = require("./routes/rating");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cookieparser());

app.get("/", (req, res) => {
  res.send("hey home!").status(200);
});

app.use("/rate", rating);
app.listen(port, () => {
  console.log(`Server at ${port}`);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

module.exports = app;
