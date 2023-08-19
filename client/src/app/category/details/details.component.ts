import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/shared/interfaces';
import { IPost } from 'src/app/shared/interfaces/post';
import { CategoryService } from '../category.service';
import { AuthService } from 'src/app/core/auth.service';
import { PostService } from 'src/app/post/post.service';
import { NgForm } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  category: ICategory<IPost> = null;
  isUserPostAuthor: boolean = false;
  newPost: Partial<IPost> = {};
  

  showDeleteConfirmation = false;
  postIdToDelete = '';


  constructor(
    private authService: AuthService,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) {


  }

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params.id;
    this.categoryService.loadCategory(id).subscribe(category => {
      this.category = category;
    });

  }


  onSubmitAddPost(form: NgForm): void {
    const categoryId = this.category._id;
    const data = form.value;


    this.postService.addPost(categoryId, data)
      .pipe(
        switchMap(() => this.categoryService.loadCategory(categoryId))
      )
      .subscribe({
        next: (category) => {
          this.category = category;
          this.newPost = {};
          form.reset();
        },
        error: (error) => {
          console.error(error);
        }
      });
  }



  showConfirmation(postId: string): void {
    this.postIdToDelete = postId;
    this.showDeleteConfirmation = true;

  }

  hideConfirmation(): void {
    this.showDeleteConfirmation = false;
    this.postIdToDelete = '';
  }




  deletePost(postId: string): void {
    const categoryId = this.category._id;
    postId = this.postIdToDelete;

    this.postService.deletePost(categoryId, postId)
      .pipe(
        switchMap(() => this.categoryService.loadCategory(categoryId))
      )
      .subscribe({
        next: (category) => {
          this.category = category;
          this.hideConfirmation();
        },
        error: (error) => {
          console.error(error);
        }
      });
  }


  likePost(postId: string): void {
    const categoryId = this.category._id;
    this.postService.likePost(postId)
    .pipe(
      switchMap(() => this.categoryService.loadCategory(categoryId))
    )
    .subscribe({
      next: (category) => {
        this.category = category;
        console.log('Successfully liked!');
      },
      error: (error) => {
        console.error(error);
      }
    });
    }
     
    hasUserLikedPost(post: IPost): boolean {
      const currentUserId = this.authService.currentUser._id;
      return post.likes.includes(currentUserId);
    }


  }

    







