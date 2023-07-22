import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { IPost } from '../interfaces/post';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.css']
})
export class RecentPostsComponent implements OnInit {

  recentPostsList: IPost[];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.loadRecentPosts(3).subscribe(recentPostsList => {
      this.recentPostsList = recentPostsList;
    })
  }

}
