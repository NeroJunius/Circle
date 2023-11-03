import { Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Threads } from "../entities/Thread";
import { createdThreadSchema } from "../utils/validators/thread";
import { v2 as cloudinary } from "cloudinary";
import { cloudinnary } from "../libs/cloudinary";

class ThreadServices {
  private readonly threadRepository: Repository<Threads> =
    AppDataSource.getRepository(Threads);
  async find(req: Request, res: Response) {
    try {
      const threads = await this.threadRepository.find({
        relations: ["user", "likes.user"],
        order: {
          id: "DESC",
        },
      });

      return res.status(200).json(threads);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  async findOne(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const threads = await this.threadRepository.findOne({
        where: {
          id: id,
        },
        relations: ["user"],
      });
      return res.status(200).json(threads);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  async post(req: Request, res: Response) {
    try {
      cloudinnary();
      const loginSession = res.locals.loginSession;
      const filename = res.locals.filename;
      const data = req.body;

      console.log("image:", filename); //check imagae
      // const { error, value } = createdThreadSchema.validate(data);
      // if (error) {
      //   return res.status(404).json(error.details[0].message);
      // }

      if (filename) {
        const cloudinaryResponse = await cloudinary.uploader.upload(
          "./uploads/" + filename
        );

        const thread = this.threadRepository.create({
          content: data.content,
          image: cloudinaryResponse.secure_url,
          user: loginSession.userId,
        });

        const results = await this.threadRepository.save(thread);
        return res.json({ results });
      } else {
        const thread = this.threadRepository.create({
          content: data.content,
          user: loginSession.userId,
        });

        const results = await this.threadRepository.save(thread);
        return res.json({ results });
      }
      
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
  async update(req: Request, res: Response): Promise<Response> {
    const id = parseInt(req.params.id);
    const { content, image } = req.body;
    try {
      const thread = await this.threadRepository.findOne({
        where: {
          id: id,
        },
      });
      thread.content = content;
      thread.image = image;
      const results = await this.threadRepository.save(thread);
      return res.send(results).json({
        message: "updated!",
      });
    } catch (error) {
      return res.status(200).json({
        message: "can't update!",
      });
    }
  }
  async delete(req: Request, res: Response): Promise<Response> {
    const id = parseInt(req.params.id);
    try {
      const threads = await this.threadRepository.findOne({
        where: { id: id },
      });
      await this.threadRepository.remove(threads);
      return res.status(200).json({
        message: "deleted!",
      });
    } catch (error) {
      return res.status(500).json({ error: "delete failed!" });
    }
  }
}
export default new ThreadServices();
