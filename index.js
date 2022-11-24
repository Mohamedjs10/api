const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());

app.get("/outfit", (req, res) => {
  const tops = ["Black", "White", "Red", "Green", "Yellow"];
  const jeans = ["Black", "White, Red", "Green", "Yellow"];
  const shoes = ["Black", "White", "Red", "Green", "Yellow"];

  res.json({
    tops: _.sample(tops),
    jeans: _.sample(jeans),
    shoes: _.sample(shoes),
  });
});
app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  res.json({ text: `the entered id is: ${id}` });
});
app.post("/comments", async (req, res) => {
  //   const id = uuid();

  const postedId = req.body.id;
  const fetchedProduct = await fetch(
    `https://dummyjson.com/products/${postedId}`
  ).then((res) => res.json());

  res.json({
    productData: fetchedProduct,
  });

  //   if (!content) {
  //     return res.sendStatus(400);
  //   }
  //   res.sendStatus(201);
});
app.listen(3000, () => console.log("API Server is running..."));
