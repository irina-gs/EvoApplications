import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PostStateService } from 'src/app/services/post-state.service';

@Component({
  selector: 'app-post-editing',
  templateUrl: './post-editing.component.html',
  styleUrls: ['./post-editing.component.css']
})
export class PostEditingComponent implements OnInit {
  post: Post = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  }

  constructor(private postStateService: PostStateService) { }

  ngOnInit(): void {
    const { userId, id, title, body } = this.postStateService.getPost()
    this.post = {
      userId: userId,
      id: id,
      title: title,
      body: body
    }
  }

  updatePost() {
    debugger
    this.postStateService.setPost(this.post)
  }
}
