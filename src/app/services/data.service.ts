import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getAllPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getComments() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments', { params: { postId: 1 } })
  }

  createPost() {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', {})
  }

  getPost() {
    return this.http.get('https://jsonplaceholder.typicode.com/post')
  }

  getAllPostsText() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts', { headers: { 'X-Test': '1' }, responseType: 'text' })
  }

  deletePost() {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1')
  }

  getPostInNewComponent() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1')
  }
}
