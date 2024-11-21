import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { DataService } from 'src/app/services/data.service';
import { PostStateService } from 'src/app/services/post-state.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = []

  constructor(
    private dataService: DataService,
    private postStateService: PostStateService
  ) { }

  ngOnInit(): void {
    this.dataService.getPosts().subscribe({
      next: (response) => {
        this.posts = response
      }
    })
  }

  setPost(post: Post) {
    this.postStateService.setPost(post)
  }
}
