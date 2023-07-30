import { IBase } from './base';

export interface IUser extends IBase {
    categories: string[];
    posts: string[];
    email: string;
    username: string;
    password: string;

}