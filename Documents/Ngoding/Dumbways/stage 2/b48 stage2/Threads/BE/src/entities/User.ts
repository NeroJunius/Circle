import { Entity, PrimaryGeneratedColumn, Column, Timestamp, OneToMany } from "typeorm";
import { Threads } from "./Thread";
import { Like } from "./Like";
import { Reply } from "./Reply";

@Entity({ name: "users" })
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullname: string;

    @Column()
    username: string;
    
    @Column()
    email: string;
    
    @Column({ select: false })
    password: string;
        
    @Column({ nullable: true })
    picture: string;

    @Column({ nullable: true })
    description: string;
    
    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at: Date;
    
    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    updated_at: Date;

    @OneToMany(() => Threads, (threads) => threads.user)
    threads: Threads[];

    @OneToMany(() => Like, (likes) => likes.user)
    likes: Like[];

    @OneToMany(() => Reply, (replies) => replies.user)
    replies: Reply[];
    follows: any;

}
