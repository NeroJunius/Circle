import { AppDataSource } from "./data-source";
import * as express from 'express';
import router from "./route";
import * as dotenv from 'dotenv';
dotenv.config();
AppDataSource.initialize()
  .then(async () => {
    const app = express();
    const port = 5000;
    const cors = require('cors');

    app.use(cors())
    
    app.use(express.json());
    app.use("/api/v1", router);

    app.listen(port, () => {
      console.log(`server running on http://localhost:${port}`);
    });
  })
  .catch(error => console.log(error));
