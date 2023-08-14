import "reflect-metadata"
import { DataSource } from "typeorm"
// import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1999n3r0",
    database: "db_thread",
    synchronize: true,
    logging: true,
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"],
    subscribers: []
})
