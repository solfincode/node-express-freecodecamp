const router = require("express").Router();
const axios = require("axios");

//axios get all todos from json placeholder api into express server api
router.get("/api/todos", async (req, res) => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const response = await axios.get(url);
  const data = response.data;
  if (!data) return res.status(404).send("not found");
  res.json({ data });
});

//get one todo
router.get("/api/todo/:id", async (req, res) => {
  const { id } = req.params;
  const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
  const response = await axios.get(url);
  const data = response.data;
  if (!data) return res.status(404).send("not found");
  res.json({ data });
});

//query - get query of userId and completed state and search them from db and return results
router.get("/api/todo", async (req, res) => {
  const { userId, completed, search } = req.query;
  const url = `https://jsonplaceholder.typicode.com/todos`;
  const response = await axios.get(url);
  const data = response.data;
  if (!data) return res.status(404).send("not found");
  const sorted = data.filter(
    (el) => el.userId == userId && String(el.completed) == completed && el.title.includes(`${search}`)
  );
  res.json({ data: sorted });
});

module.exports = router;
