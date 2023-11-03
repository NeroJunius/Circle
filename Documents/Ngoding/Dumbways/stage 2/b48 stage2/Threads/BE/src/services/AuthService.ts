import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import { Request, Response } from "express";
import { userSchema } from "../utils/validators/user";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

class AuthServices {
  private readonly authRepository: Repository<User> =
    AppDataSource.getRepository(User);
  async register(req: Request, res: Response) {
    try {
      const { fullname, username, password, email } = req.body;
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashed = await bcrypt.hash(password, salt);

      const { error, value } = userSchema.validate(req.body);
      if (error) {
        return res.status(404).json(error.details[0].message);
      }

      // const encryPass = await bcrypt.hash(password, 10);
      const user = this.authRepository.create({
        username,
        fullname,
        email,
        password: hashed,
        picture: "https://as1.ftcdn.net/v2/jpg/02/48/42/64/1000_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
        description: "",
      });
      console.log(user);

      const checkEmail = await this.authRepository.count({
        where: {
          email: value.email,
          username: value.username,
        },
      });
      if (checkEmail > 0) {
        return res.status(400).json("User Name atau Email sudah terdaftar!");
      }

      const UserNew = await this.authRepository.save(user);
      // const createRegister = this.authRepository.save(user);
      return res.status(200).json(`success registered as ${UserNew}`);
    } catch (error) {
      return res.status(200).json({
        message: "error",
        error: error.message,
      });
    }
  }
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await this.authRepository.findOne({
        where: { email },
      });
      if (!user) {
        return res.status(400).json({
          error: "invalid!",
        });
      }
      console.log(user, "ini user");

      const passwordValid = await bcrypt.compare(password, user.password);

      const userId = user.id;
      const emails = user.email;
      const fullname = user.fullname;
      const username = user.username;
      const JWT_SECRET_KEY = "IniRahasia";

      const token = jwt.sign(
        { userId, emails, fullname, username },
        JWT_SECRET_KEY,
        {
          expiresIn: "12h",
        }
      );

      if (passwordValid) {
        // console.log("Authentication", accessToken)
        res.json({ token });
      } else {
        return res.status(401).json({ error: "Invalid email or password" });
      }
    } catch (error) {
      return res.status(500).json("There's an error");
    }
  }
  
  async check(req: Request, res: Response) {
    try {
      const loginSession = res.locals.loginSession;
      const user = await this.authRepository.findOne({
        where: {
          id: loginSession.userId,
        },
        select: ["id", "username", "fullname", "password"],
      });
      return res.status(200).json({
        user,
        message: "The Token is Valid!",
      });
    } catch (error) {
      return res.status(200).json(500).json({
        message: "This error",
        error,
      });
    }
  }
}
export default new AuthServices();
