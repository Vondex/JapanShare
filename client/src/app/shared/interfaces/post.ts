import { IBase } from './base';
import { IUser } from "./user";
import { ICategory } from "./category";


export interface IPost extends IBase{
    
    likes:  string[];
    text: string;
    image: string;
    userId: IUser;


}