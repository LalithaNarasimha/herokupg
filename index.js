const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.listen(3000, () => { {
  console.log("Server started (http://localhost:3000/) !");
}
});

app.get("/", (req, res) => { {
  //res.send ("Hello world...");
  res.render("index");
}
});