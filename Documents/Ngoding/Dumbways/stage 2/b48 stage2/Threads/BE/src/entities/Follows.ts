import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from './User';

@Entity({ name: "follows" })
export class Follows {

    @PrimaryGeneratedColumn()
    id: number;
    
    @ManyToOne(() => User, (user) => user.follows)
    follower: User;

    @ManyToOne(() => User, (user) => user.follows)
    followed: User;

}
