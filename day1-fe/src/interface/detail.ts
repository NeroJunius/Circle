import { IUser } from "./users";

interface IDetail 
{
    id?: number;
    user: IUser
    fullname?: string;
    username?: string; 
    picture?: string;
    posted_at?: string;
    content?: string;
    image?: string;
    isLiked?: boolean;
    likesCount?: number;
    repliesCount?: number;
}

export default IDetail
