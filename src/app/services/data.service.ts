import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }
}
