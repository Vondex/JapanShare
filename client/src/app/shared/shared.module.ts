import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { EmailValidatorDirective } from './email-validator.directive';
import { TimeModPipe } from './time-mod.pipe';


@NgModule({
  declarations: [
    LoaderComponent,
    RecentPostsComponent,
    EmailValidatorDirective,
    TimeModPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    RecentPostsComponent,
    EmailValidatorDirective,
    TimeModPipe
  ]
})
export class SharedModule { }
