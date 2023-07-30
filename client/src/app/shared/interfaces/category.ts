import { IBase } from './base';
import { IUser } from "./user";

export interface ICategory<T = string> extends IBase {
    categoryLikes:  string[];
    posts: T[];
    categoryName: string;
    categoryImage: string;
    userId: IUser;
 


}