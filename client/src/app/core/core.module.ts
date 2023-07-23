import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { storageServiceProvider } from './storage.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RecentPostsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [

    storageServiceProvider
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    RecentPostsComponent
 

  ]
})
export class CoreModule { }
