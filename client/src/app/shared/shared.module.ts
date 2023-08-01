import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { EmailValidatorDirective } from './email-validator.directive';

@NgModule({
  declarations: [
    LoaderComponent,
    RecentPostsComponent,
    EmailValidatorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    RecentPostsComponent,
    EmailValidatorDirective
  ]
})
export class SharedModule { }
