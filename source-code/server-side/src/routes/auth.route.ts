import { Router } from "express";
import loginController from "../controllers/login.controller";
import logoutController from "../controllers/logout.controller";
import signupController from "../controllers/signup.controller";
const authRouter = Router();
authRouter.get("/get-request", (_, res) =>
  res.status(200).json({
    message: "welcome back!",
  })
);
authRouter.post("/login", loginController);
authRouter.post("/logout", logoutController);
authRouter.post("/signup", signupController);

export default authRouter;
