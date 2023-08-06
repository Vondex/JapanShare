import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { IUser } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {

  get currentUser(): IUser {
    return this.authService.currentUser;
  }

  get isLogged(): boolean {
    return this.authService.isLogged;
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  logoutHandler(): void {
    this.authService.logout().subscribe(() => this.router.navigate(['/user/login']));
  }

  ngOnDestroy(): void {
  }
}