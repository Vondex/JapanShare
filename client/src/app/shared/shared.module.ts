import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';

@NgModule({
  declarations: [
    LoaderComponent,
    RecentPostsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    RecentPostsComponent
  ]
})
export class SharedModule { }
