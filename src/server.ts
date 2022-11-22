import express from "express";
import router from "./router";
import morgan from "morgan";
import cors from "cors";
import { protectRoute } from "./modules/auth";
import { createNewUser, signIn } from "./handlers/user";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200);
  res.json({ message: "hello" });
});

app.use("/api", protectRoute, router);
app.post("/user", createNewUser);
app.post("/signin", signIn);

app.use((err, req, res, next) => {
  if (err.type === "auth") {
    res.status(401).json({ message: "Unauthorized" });
  } else if (err.type === "input") {
    res.status(400).json({ message: "Invalid input" });
  } else {
    res.status(500).json({ message: "Sorry we screwed up" });
  }
});

export default app;
