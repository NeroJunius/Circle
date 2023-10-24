import { Request, Response } from "express";
import ThreadServices from "../services/ThreadsService";

class ThreadController {
  find(req: Request, res: Response) {
    ThreadServices.find(req, res);
  }
  findOne(req: Request, res: Response) {
    ThreadServices.findOne(req, res);
  }
  post(req: Request, res: Response) {
    ThreadServices.post(req, res);
  }
  delete(req: Request, res: Response) {
    ThreadServices.delete(req, res);
  }
  update(req: Request, res: Response) {
    ThreadServices.update(req, res);
  }
}
export default new ThreadController();