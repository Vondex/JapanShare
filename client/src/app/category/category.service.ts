import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ICategory, IPost } from '../shared/interfaces';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;
@Injectable()
export class CategoryService {
  // authService: any;

  constructor(private http: HttpClient) { }

  loadCategories(): Observable<ICategory[]> {

    return this.http.get<ICategory[]>(`/categories`);
  }

  loadCategory(id: string): Observable<ICategory<IPost>> {
    return this.http.get<ICategory<IPost>>(`/categories/${id}`);
  }
  addCategory(data: any): Observable<ICategory<any>> {
    return this.http.post<ICategory<any>>(`/categories`, data);
  }
  likeCategory(categoryId: string): Observable<ICategory<IPost>> {
    return this.http.put<ICategory<IPost>>(`/categories/${categoryId}`, {});
  }

}
