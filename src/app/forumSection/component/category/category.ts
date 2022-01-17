import { Topic } from "../topic/topic";
export interface Category {
    id: number;
    name: string;
    topic?:Topic[];
}
