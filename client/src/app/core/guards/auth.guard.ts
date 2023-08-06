import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import {  map, tap } from 'rxjs/operators';
import { IUser } from '../../shared/interfaces';
import { AuthService } from '../auth.service';
// import { PostService } from '../../post/post.service';

@Injectable()
export class AuthGuard implements CanActivateChild {

  constructor(

    private authService: AuthService,
    // private postService: PostService,
    private router: Router
  ) { }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let stream$: Observable<IUser | null>;
    const currentUser = this.authService.currentUser;
    
    if (currentUser === undefined) {
      stream$ = this.authService.authenticate();
    } else {
      stream$ = of(currentUser);
    }

    return stream$.pipe(
      map((user) => {
        const isLoggedFromData = childRoute.data.isLogged;
        return typeof isLoggedFromData !== 'boolean' || isLoggedFromData === !!user;
      }),
      tap((canContinue) => {
        if (canContinue) { return; }
        const url = 'user/login';
        this.router.navigateByUrl(url);
      }),
    );
  }

  // public isPostOwner(postId: string, user: IUser): Observable<boolean> {

  //   return this.postService.getPostById(postId).pipe(
  //     map((post) => {

  //       const isOwner = post.userId._id === user._id;
  //       if (!isOwner) {

  //         return false;
  //       }
  //       return true;
  //     })
  //   );
  // }

  // canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
  //   const postId = childRoute.paramMap.get('id'); // Get the post ID from the route params
  //   if (!postId) {
  //     return of(false);
  //   }

  //   const user = this.authService.currentUser;

  //   if (!user) {

  //     this.router.navigateByUrl('user/login');
  //     return of(false);
  //   }

  //   return this.postService.getPostById(postId).pipe(
  //     map((post) => {
  //       const isOwner = post.userId._id === user._id;
  //       if (!isOwner) {
  //         return false;
  //       }
  //       return true;
  //     })
  //   );
  // }



}





// @Injectable()
// export class AuthGuard implements CanActivateChild {
//     constructor(
//         private userService: UserService,
//         private router: Router
//         ) { }
//     canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//         const isLoggedFromData = childRoute.data.isLogged;

//         if(typeof isLoggedFromData === 'boolean' && isLoggedFromData === this.userService.isLogged) {
//             return true
//         }
//         const url = this.router.url;
//         this.router.navigateByUrl(url);
//         return false;
//     }


   
// }