import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PostStateService } from 'src/app/services/post-state.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  }

  constructor(private postStateService: PostStateService) { }

  ngOnInit(): void {
    this.post = this.postStateService.getPost()
  }
}
