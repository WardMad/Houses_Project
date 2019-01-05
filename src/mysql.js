const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");

// function Connect() {
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dbConnection = mysql.createConnection({
  multipleStatements: true,
  host: "localhost",
  user: "root",
  password: "",
  database: "houseBelg"
});

dbConnection.connect();

app.get("/price", (req, res) => {
  try {
    dbConnection.query(
      "select price, address, city, rooms from house_mouse",
      //   [],
      (err, results, fields) => {
        if (err) {
          res.status(400).end();
          return;
        }

        let data = results.map((el, i) => {
          let arr = [el.address, el.city];
          return arr;
        });
        console.log(data);
        res.json({
          data
        });
        console.log('status "ok" ');
      }
    );
  } catch (e) {
    throw e;
  }
});
app.get("/searchCity", (req, res) => {
  let cityWhere = "";
  let cityParam = req.query.city || null;
  console.log(cityParam);
  if (cityWhere) {
    cityWhere = `where country '${cityParam}'`;
  }
  try {
    dbConnection.query(
      `select * from house_mouse ${cityWhere};`,
      [],
      (err, results, fields) => {
        if (err) {
          res.status(400).end();
          return;
        }

        res.json({
          results
        });
        console.log('status "ok" ');
      }
    );
  } catch (e) {
    throw e;
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running at localhost ${port}`);
});
// }
// Connect();
// const db = Connect();
module.exports = dbConnection;
