import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts-service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: Post[] = []

  constructor(private api : PostsService) { 
  }

  ngOnInit(): void{
    this.fetchPosts();
  }

fetchPosts(){
  this.api.fetchPosts().subscribe(data=>{
    this.posts = data.content
  })
}
}
