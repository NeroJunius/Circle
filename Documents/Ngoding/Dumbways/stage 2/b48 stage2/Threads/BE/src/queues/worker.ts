import * as amqp from "amqplib";

import { v2 as cloudinary } from "cloudinary";
import { AppDataSource } from "../data-source";
import { Threads } from "../entities/Thread";
import { jancok } from "../libs/cloudinary";
// class proccess { 
//     private readonly threadRepository: Repository<Thread> = 
//     AppDataSource.getRepository(Thread) 
    export async function processQueue() { 
        try { 
            jancok()
            const rabbitConnection = await amqp.connect("amqp://localhost") 
            const channel = await rabbitConnection.createChannel() 
             
            await channel.assertQueue("aderino arya nanda") 
             
            await channel.consume("aderino arya nanda", async (message) => {         
            if(message !== null) { 
                try { 
                    const payload = JSON.parse(message.content.toString()) 
                    console.log("Received", payload) 
 
                    const cloudinaryResponse = await cloudinary.uploader.upload( 
                        "./uploads/" + payload.image 
                    ) 
                         
                    const thread = AppDataSource.getRepository(Threads).create({ 
                        content: payload.content, 
                        image: cloudinaryResponse.secure_url, 
                        user: payload.user_id 
                    }) 
                    await AppDataSource.getRepository(Threads).save(thread)

                    console.log("Received Create", thread) 
                    console.log("Received user", thread.user) 
         
                     
 
                    channel.ack(message) 
                } catch (error) { 
                    console.error("Error worker:", error) 
                } 
            } 
        }) 
        } catch (error) { 
            console.error("Error prorcessing queue:", error) 
        } 
    } 
// } 
 
// const pro = new proccess() 
AppDataSource.initialize().then(async() => { 
    processQueue() 
}).catch(error => console.log(error))