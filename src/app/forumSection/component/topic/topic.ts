import { Category } from "../category/category";
import { Comment } from "../comment/comment";
import { User } from "src/app/user";
export interface Topic {
    id: number;
    title: string;
    content: string;
    created_at: Date;
    updated_at: Date;
    user: {
        username:string
    };
    category: Category;
    comments: Comment[];
}


