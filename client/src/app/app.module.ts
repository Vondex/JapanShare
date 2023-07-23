import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { UserService } from './user.service';
import { storageServiceProvider } from './storage.service';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryService } from './category.service';
import { CategoryItemComponent } from './category-item/category-item.component';
import { LoaderComponent } from './loader/loader.component';
import { PostService } from './post.service';

import { CatalogComponent } from './catalog/catalog.component';

import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { PostListComponent } from './post-list/post-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    CategoryItemComponent,
    LoaderComponent,
    CatalogComponent,
    PostListComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
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
