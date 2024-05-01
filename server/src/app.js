import express from "express";

const router = express.Router();

router.get("/users", function (req, res) {
  res.send([
    {
      id: 0,
      username: "aaa",
      first_name: "string",
      last_name: "string",
      is_active: true,
      last_login: "2024-04-27T23:35:39.977Z",
      is_superuser: true,
    },
    {
      id: 1,
      username: "bbb",
      first_name: "string",
      last_name: "string",
      is_active: true,
      last_login: "2024-04-27T23:35:39.977Z",
      is_superuser: true,
    },
    {
      id: 2,
      username: "ddd",
      first_name: "string",
      last_name: "string",
      is_active: true,
      last_login: "2024-04-27T23:35:39.977Z",
      is_superuser: true,
    },
    {
      id: 3,
      username: "ccccc",
      first_name: "string",
      last_name: "string",
      is_active: true,
      last_login: "2024-04-27T23:35:39.977Z",
      is_superuser: true,
    },
  ]);
});

router.post("/users", function (req, res) {
  const user = req.body;
  res.send({
    username: "-MHwoeqRxNJ3jATnUPkyE.r66mBFWrL07+YG0CuJl",
    first_name: "string",
    last_name: "string",
    is_active: true,
    last_login: "2024-04-27T23:35:39.977Z",
    is_superuser: true,
    ...user,
    id: 3,
  });
});
router.put("/users/:userId", function (req, res) {
  const { userId } = req.params;
  const user = req.body;
  res.send({
    username: "-MHwoeqRxNJ3jATnUPkyE.r66mBFWrL07+YG0CuJl",
    first_name: "string",
    last_name: "string",
    is_active: true,
    last_login: "2024-04-27T23:35:39.977Z",
    is_superuser: true,
    ...user,
    id: Number(userId),
  });
});

export default router;
