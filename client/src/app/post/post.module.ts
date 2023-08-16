import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './post.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PostListComponent
  ],
  providers: [

    PostService
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PostListComponent
  ]
})
export class PostModule { }
