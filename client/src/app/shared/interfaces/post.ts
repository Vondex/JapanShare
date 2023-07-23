import { IUser } from "./user";
import { ICategory } from "./category";

export interface IPost {
    _id: string;
    likes:  string[];
    text: string;
    image: string;
    userId: IUser;
    categoryId: ICategory;
    created_at: string;
    updatedAt: string;
    __v: number;


}