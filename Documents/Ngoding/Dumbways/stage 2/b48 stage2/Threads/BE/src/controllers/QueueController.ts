import { Request, Response } from "express";
import * as amqp from 'amqplib';


class QueueController {
  async enqueue(req: Request, res: Response) {
    try {
      const content = req.body.content
      const filename = res.locals.filename
      const loginSession = res.locals.loginSession

      const data = {
        content: content,
        image: filename,
        user_id: loginSession.userId
      };

      const payload = JSON.stringify(data)
      const connection = await amqp.connect("amqp://localhost")
      const channel = await connection.createChannel()

      await channel.assertQueue("aderino arya nanda")
      channel.sendToQueue("aderino arya nanda", Buffer.from(payload))

      await channel.close()
      await connection.close()

      res.status(200).json({
        message: "thread is queued!",
      })
    } catch (error) {
      res.status(500).json({
        error: "something wrong in server!"
      })
    }
  }
}

export default new QueueController