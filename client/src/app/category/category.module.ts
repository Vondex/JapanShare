import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryItemComponent } from './category-item/category-item.component';
import { CategoryService } from './category.service';


@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryItemComponent
  ],
  imports: [
    CommonModule
    
  ],
  providers: [
    CategoryService
  ],
  exports: [
    CategoriesComponent,
    CategoryItemComponent
  ]
})
export class CategoryModule { }
