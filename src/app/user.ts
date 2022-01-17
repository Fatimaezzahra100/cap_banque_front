import { Topic } from "./forumSection/component/topic/topic";
import { SubComment } from "./forumSection/component/sub-comment/sub-comment";
export interface User {
    id:number,
    lastname:string;
    firstname:string;
    mail:string;
    address:string;
    username:string;
    RIB:string;
    topics?:Topic[];
    comments?:Comment[];
    subComment?:SubComment[];
}
