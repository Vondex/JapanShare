import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryItemComponent } from './category-item/category-item.component';
import { CategoryService } from './category.service';
import { NewComponent } from './new/new.component';
import { CategoryRouterModule } from './category-routing.module';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';
import { PostModule } from '../post/post.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryItemComponent,
    NewComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    CategoryRouterModule,
    SharedModule,
    PostModule,
    FormsModule
    
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
