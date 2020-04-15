import express from "express";
// import * as dbConfig from "./config/db.config";
import router from "./routes/api.v1";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;
app.use("/api/v1", router);

// Home page
app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
