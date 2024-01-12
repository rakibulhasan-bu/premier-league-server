import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./router";
import notFoundRoute from "./middleware/notFoundRoute";
import globalErrorHandler from "./middleware/globalErrorHandler";

const app: Application = express();

//using middleware
app.use(express.json());
// const corsOptions = {
//   origin: "http://localhost:3000",
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   credentials: true,
// };
app.use(cors());

//application routes
app.use("/api", router);

// landing or testing route
app.get("/", (_req: Request, res: Response) => {
  res.send(`Football APi is working perfectly`);
});

// unknown route handling
app.all("*", notFoundRoute);

//global error handling
app.use(globalErrorHandler);

export default app;
