import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts-service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: Post[] = [];

  constructor(private api: PostsService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts() {
    this.api.fetchPosts().subscribe(data => {
      this.posts = data.content;

      this.posts.forEach(post => {
        const dateParts = String(post.createdAt).split(',').map(part => parseInt(part, 10));
        const formattedDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2], dateParts[3], dateParts[4], dateParts[5]);
        post.createdAt = formattedDate;
      });
    });
  }
}
