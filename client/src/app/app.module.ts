import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { UserService } from './user.service';

import { CategoryService } from './category/category.service';
import { LoaderComponent } from './shared/loader/loader.component';


import { CatalogComponent } from './catalog/catalog.component';

import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { CategoryModule } from './category/category.module';
import { PostModule } from './post/post.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoaderComponent,
    CatalogComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CategoryModule,
    PostModule
  ],
  providers: [
    UserService,
    CategoryService

  ],
  bootstrap: [
    HeaderComponent,
    AppComponent,
    FooterComponent
  ]
})
export class AppModule { }
