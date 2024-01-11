import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts-service';

@Component({
  selector: 'app-post-widget',
  templateUrl: './post-widget.component.html',
  styleUrls: ['./post-widget.component.css']
})
export class PostWidgetComponent {
  posts: Post[] = []

  constructor(private api : PostsService) { 
  }

  ngOnInit(): void{
    this.fetchLatest();
  }

  fetchLatest(){
  this.api.fetchLatest().subscribe(data=>{
    this.posts = data
  })
}
}
