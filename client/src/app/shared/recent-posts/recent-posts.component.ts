import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.css']
})
export class RecentPostsComponent {

  @Input() title: string;
  

}
