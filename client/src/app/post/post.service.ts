import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../shared/interfaces/post';
import { ICategory } from '../shared/interfaces';

const apiUrl = environment.apiUrl;
@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  loadPosts(limit?: number): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${apiUrl}/posts${limit ? `?limit=${limit}` : ''}`)
  }

  addPost(id: string): Observable<ICategory<IPost>> {
    return this.http.post<ICategory<IPost>>(`${apiUrl}/categories/${id}`, { withCredentials: true });
  }
  // editPost(data: any): Observable<IPost> {
  //   return this.http.put(`${apiUrl}/users/profile`, data, { withCredentials: true }).pipe(
  //     tap((user: IUser) => this.currentUser = user)
  //   );
  // }
  
}
