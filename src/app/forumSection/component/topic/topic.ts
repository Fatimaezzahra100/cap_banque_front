import { Category } from "../category/category";

export interface Topic {
    id: number;
    name: string;
    content: string;
    created_at: Date;
    author: string;
    category: Category
}


