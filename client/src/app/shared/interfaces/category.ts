import { IBase } from './base';
import { IPost } from './post';
import { IUser } from "./user";

export interface ICategory<T = string> extends IBase {
    categoryLikes:  string[];
    posts: IPost[];
    categoryName: string;
    categoryImage: string;
    userId: IUser;
 


}