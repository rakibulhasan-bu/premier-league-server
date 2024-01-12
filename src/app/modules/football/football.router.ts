import express from "express";
import { footballControllers } from "./football.controller";

const footballRouter = express.Router();

footballRouter.get("/league-table", footballControllers.getLeagueTable);

footballRouter.get("/leader-board", footballControllers.getLeaderBoard);

footballRouter.get("/league-fixers", footballControllers.getFixers);

footballRouter.get("/league-live-match", footballControllers.getLiveMatch);

footballRouter.get(
  "/league-trending-match",
  footballControllers.getTrendingNow,
);

export default footballRouter;
