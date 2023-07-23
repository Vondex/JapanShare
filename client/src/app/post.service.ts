import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from './interfaces/post';

const apiUrl = environment.apiUrl;
@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  loadPosts(limit?: number): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${apiUrl}/posts${limit ? `?limit=${limit}` : ''}`)
  }
  
}
