import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts-service';

@Component({
  selector: 'app-posts-form',
  templateUrl: './posts-form.component.html',
  styleUrls: ['./posts-form.component.css']
})
export class PostsFormComponent {
  post: Post = {} as Post;
  caption: string
  description: string
  angForm: FormGroup

  constructor(private api: PostsService) { }

  ngOnInit(): void {
		this.angForm = new FormGroup({
			title: new FormControl(null, [Validators.required]),
			description: new FormControl(null, [Validators.required])
    })
	}

	submit() {
    if (this.angForm.valid) {
      this.post.title = this.angForm.controls?.['title']?.value
      this.post.description = this.angForm.controls?.['description']?.value
      this.api.createPost(this.post).subscribe(()=>{
      window.alert("Successfully added!")
      })
    }
  }
}
