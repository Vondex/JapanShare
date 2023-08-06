import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, catchError, tap } from 'rxjs';
import { IUser } from '../shared/interfaces';


@Injectable()
export class AuthService {


  currentUser: IUser | null;


  get isLogged(): boolean { return !!this.currentUser; } 



  constructor( 
    private http: HttpClient,

    ) { }

  
  login(data: any): Observable<any> {
    try {
      return this.http.post(`/login`, data).pipe(
        tap((user: IUser) => this.currentUser = user)
      );
    } catch (err) {
      throw new Error(err);
    }
   
  }

  register(data: any): Observable<any> {
    try {
      return this.http.post(`/register`, data).pipe(
        tap((user: IUser) => this.currentUser = user)
      );

    } catch (err) {
      throw new Error(err);
    }
  }

  logout(): Observable<any> {
    return this.http.post(`/logout`, {}).pipe(
      tap(() => this.currentUser = null)
    );
  }

  authenticate(): Observable<any> {
    return this.http.get(`/users/profile`).pipe(
      tap(((user: IUser) => this.currentUser = user)),
      catchError(() => { this.currentUser = null; return [null]; })
    );
  }


}
