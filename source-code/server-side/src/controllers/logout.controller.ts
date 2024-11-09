import { Request, Response } from "express";

 const logoutController = (req: Request, res: Response) => {
  res.send("Logout successful");
};
export default logoutController ;