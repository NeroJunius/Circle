
import { Repository } from "typeorm";
import { Threads } from "../entities/Threads";
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";

class ThreadService {
  check(req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) {
      throw new Error("Method not implemented.");
  }
  login: any;
  register(req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) {
      throw new Error("Method not implemented.");
  }
  private readonly threadRepository: Repository<Threads> =
    AppDataSource.getRepository(Threads);

  async find(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const threads = await this.threadRepository.find({
        relations: ["user"]
      });
      return res.status(200).json(threads);
    } catch (err) {
      return res.status(404).json("Something eror in server");
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const threads = await this.threadRepository.findOne({
        relations : ["user"],
        where: {
          id: id,
        },
      });
      return res.status(200).json(threads);
    } catch {
      return res.status(404).json("Something error in fineOne");
    }
  }

  async create(req: Request, res: Response) {
    try {
      const data = req.body;
      const thread = this.threadRepository.create({
        content: data.content,
        image: data.image,
        posted_at: data.posted_at,
        user: data.user,
      });
      const createdThread = await this.threadRepository.save(thread);
      return res.status(200).json(createdThread);
    } catch (error) {
      return res.status(500).json({ message: "Failed to create thread.", error: error.message });
    }
  }
  
  
  async delete(req: Request, res: Response): Promise<Response> {
    const id = parseInt(req.params.id);
    try {
      const deleteResult = await this.threadRepository.delete(id);
  
      if (deleteResult.affected === 0) {
        return res.status(404).json({ message: "Thread not found." });
      }
  
      return res.status(200).json({ message: "Thread deleted successfully." });
    } catch (error) {
      return res.status(500).json({ message: "Failed to delete thread.", error: error.message });
    }
  }

// Potongan kode tersebut adalah bagian dari fungsi delete yang menghapus thread dari basis data. 
// Pertama, kode ini mengambil ID thread dari permintaan. Kemudian, dengan menggunakan this.threadRepository.delete, thread dengan ID yang sesuai dihapus dari basis data. 
// Jika penghapusan berhasil dan ada thread yang dihapus, kode akan mengembalikan status kode 200 dan pesan "Thread deleted successfully.". 
// Jika tidak ada thread yang ditemukan dengan ID yang diberikan, kode akan mengembalikan status kode 404 dan pesan "Thread not found.". 
// Jika terjadi kesalahan selama proses penghapusan, kode akan menangkap kesalahan dan mengembalikan status kode 500 beserta pesan kesalahan yang sesuai.
 
 
  async update(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    console.log(id);
    const threadz = await this.threadRepository.findOne({
      where: {
        id: id,
      },
    });

    // mengambil ID thread dari permintaan, mencetaknya untuk tujuan pemeriksaan, 
    // dan kemudian menggunakan metode findOne dari this.threadRepository untuk mengambil thread yang sesuai dengan ID tersebut dari basis data

    const data = req.body;

    if (data.content != "") {
      threadz.content = data.content;
    }

    if (data.content != "") {
      threadz.image = data.image;
    }

    const updatedThread = this.threadRepository.save(threadz);

    return res.status(200).json(updatedThread);
  }
}

export default new ThreadService()