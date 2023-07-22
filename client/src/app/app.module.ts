import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './user.service';
import { storageServiceProvider } from './storage.service';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryService } from './category.service';
import { CategoryItemComponent } from './category-item/category-item.component';
import { LoaderComponent } from './loader/loader.component';
import { PostService } from './post.service';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CategoriesComponent,
    CategoryItemComponent,
    LoaderComponent,
    RecentPostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    CategoryService,
    storageServiceProvider,
    PostService
  ],
  bootstrap: [
    HeaderComponent,
    AppComponent,
    FooterComponent
  ]
})
export class AppModule { }
