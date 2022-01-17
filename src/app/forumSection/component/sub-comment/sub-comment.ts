import { User } from "src/app/user";
import { Comment } from "../comment/comment";
export interface SubComment {
    id:number;
    content:string;
    created_at:Date;
    updated_at:Date;
    comment:Comment;
    user:User;
}
