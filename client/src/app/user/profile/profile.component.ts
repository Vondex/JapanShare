import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { IUser } from 'src/app/shared/interfaces';
import { UserService } from '../user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  inEditMode = false;

  get currentUser(): IUser {
    return this.authService.currentUser;
  }

  constructor(
    private authService: AuthService,
    private userService: UserService
    ) { }

  ngOnInit(): void {
  }
  changeHandler(data: any): void {
    console.log(data);
  }

  toggleEditMode(): void {
    this.inEditMode = !this.inEditMode;
  }

  submitHandler(data: any): void {
    this.userService.updateProfile(data).subscribe({
      next: () => {
        this.inEditMode = false;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}