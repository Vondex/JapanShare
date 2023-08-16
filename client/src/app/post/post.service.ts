import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IPost } from '../shared/interfaces/post';


const apiUrl = environment.apiUrl;

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  loadPosts(limit?: number): Observable<IPost[]> {
    return this.http.get<IPost[]>(`/posts${limit ? `?limit=${limit}` : ''}`)
  }
  getAllPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`/posts`);
  }
  getPostById(postId: string): Observable<IPost> {
    return this.getAllPosts().pipe(
      map(posts => posts.find(post => post._id === postId))
    );
  }
  addPost(categoryId: string, postData: any): Observable<IPost> {
    return this.http.post<IPost>(`/categories/${categoryId}`, postData);
  }

  deletePost(categoryId: string, postId: string): Observable<any> {
    return this.http.delete(`/categories/${categoryId}/posts/${postId}`);
  }

  likePost(postId: string): Observable<any> {
    return this.http.put<any>(`/likes/${postId}`, {});
  }
 

  
}


