import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostStateService {
  private post: Post = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  }

  getPost() {
    return this.post
  }

  setPost(post: Post) {
    this.post.userId = post.userId
    this.post.id = post.id
    this.post.title = post.title
    this.post.body = post.body
  }

  constructor() { }
}
