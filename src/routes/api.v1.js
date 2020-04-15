import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  res.status(200).send("Welcome to API v1 Home page");
});

export default router;