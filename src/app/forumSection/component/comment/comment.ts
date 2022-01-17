import { User } from "src/app/user";
import { SubComment } from "../sub-comment/sub-comment";
export interface Comment {
    id:number;
    content:string;
    created_at:Date;
    updated_at:Date;
    user:User;
    subComment?:SubComment[];
}
