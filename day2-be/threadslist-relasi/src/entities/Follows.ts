import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "follows"})
export class Thread {
    @PrimaryGeneratedColumn()
    id: number;
}