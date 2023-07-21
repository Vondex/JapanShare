import { IUser } from "./user";

export interface ICategory {
    categoryLikes:  string[];
    posts: string[];
    _id: string;
    categoryName: string;
    categoryImage: string;
    userId: IUser;
    created_at: string;
    updatedAt: string;
    __v: number;


}