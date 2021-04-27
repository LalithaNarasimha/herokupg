require('dotenv').config()


const express = require("express");

const app = express();

app.set("view engine", "ejs");
//app.set("views", __dirname + "/views");
app.listen(3000, () => { {
  console.log("Server started (http://localhost:3000/) !");
}
});

// Add database package and connection string (can remove ssl)
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.get("/", (req, res) => {
  //res.send ("Hello world...");
  const sql = "SELECT * FROM PRODUCT ORDER BY PROD_ID";
  pool.query(sql, [], (err, result) => {
      var message = "";
      var model = {};
      if(err) {
          message = `Error - ${err.message}`;
      } else {
          message = "success";
          model = result.rows;
      };
      res.render("index", {
          message: message,
          model : model
      });
  });
});