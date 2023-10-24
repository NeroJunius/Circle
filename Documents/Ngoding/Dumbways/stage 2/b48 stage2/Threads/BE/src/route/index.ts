import * as express from "express";
import { Request, Response } from "express";
import AuthController from "../controllers/AuthController";
import authenticate from "../middlewares/auth";
import { upload } from "../middlewares/uploadFile";
import ThreadsController from "../controllers/ThreadsController";
import QueueController from "../controllers/QueueController";


const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("hello from v1");
});
router.get("/thread", authenticate, ThreadsController.find);
router.get("/thread/:id", ThreadsController.findOne);
router.post("/thread", authenticate, upload("image"), ThreadsController.post);

router.delete("/thread/:id", authenticate, ThreadsController.delete);
router.patch("/thread/:id", ThreadsController.update);

router.post("/auth/register", AuthController.register);
router.post("/auth/login", AuthController.login);
router.get("/auth/check", authenticate, AuthController.check);
export default router;
