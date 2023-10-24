
import { v2 as cloudinary } from 'cloudinary'; // Import v2 module
import * as dotenv from 'dotenv';

dotenv.config();


export function cloudinnary() {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });
}

