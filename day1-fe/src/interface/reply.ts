export interface Reply 
{
    id?: number;
    fullname?: string;
    username?: string; 
    picture?: string;
    posted_at?: string;
    content?: string;
    image?: string;
    likesCount?: number;
    repliesCount?: number;
    isLiked?: boolean;
}