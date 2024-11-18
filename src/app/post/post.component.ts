import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  data = {}

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe({
      next: (response) => {
        console.log(response['post'])
        this.data = response['post']
      }
    })
  }
}
