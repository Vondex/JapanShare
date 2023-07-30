import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ICategory, IPost, IUser } from '../shared/interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;
@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }

  loadCategories(): Observable<ICategory[]> {

    return this.http.get<ICategory[]>(`${apiUrl}/categories`);
  }

  loadCategory(id: string): Observable<ICategory<IPost>> {
    return this.http.get<ICategory<IPost>>(`${apiUrl}/categories/${id}`);
  }
}
