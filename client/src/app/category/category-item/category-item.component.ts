import { Component, Input, OnInit } from '@angular/core';
import { ICategory, IPost } from '../../shared/interfaces';
import { AuthService } from 'src/app/core/auth.service';
import { CategoryService } from '../category.service';


@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  @Input() category: ICategory;

  get isLogged(): boolean {
    return this.authService.isLogged;
  }
  get isCurrentUserCategoryAuthor(): boolean {
    const currentUser = this.authService.currentUser;
    return currentUser && this.category.userId._id === currentUser._id;
  }


  constructor(
    private authService: AuthService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
  }

  
  likeCategory(): void {
    this.categoryService.likeCategory(this.category._id).subscribe(
      (updatedCategory: ICategory) => {
        this.category.categoryLikes = updatedCategory.categoryLikes;
      }
    );
  }


  hasUserLikedCategory(category: ICategory): boolean {
    const currentUserId = this.authService.currentUser._id
    return category.categoryLikes.includes(currentUserId);
  }


}
