import { NextFunction, Request, Response } from "express";
import * as multer from "multer";

export const upload = (filedName: string) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads/");
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, file.fieldname + "-" + uniqueSuffix + ".png");
    },
  });
  const uploadFile = multer({ storage: storage });
  return (req: Request, res: Response, next: NextFunction) => {
    uploadFile.single(filedName)(req, res, function (err: any) {
      if (err) {
        return res.status(400).json({ error: "File Upload Failed." });
      }
      res.locals.filedname = req.file.filename;
      next();
    });
  };
};