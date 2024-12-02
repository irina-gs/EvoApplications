import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { UserFull } from 'src/app/interfaces/user-full';
import { Role } from 'src/app/enum/role.enum';

@Component({
  selector: 'app-administration-user-detail-page',
  templateUrl: './administration-user-detail-page.component.html',
  styleUrls: ['./administration-user-detail-page.component.css']
})
export class AdministrationUserDetailPageComponent implements OnInit {
  user: UserFull = {
    username: '',
    role: Role.Guest,
    firstName: '',
    lastName: '',
    middleName: '',
    avatar: '',
    userAgent: '',
    createdOn: '',
    updatedOn: '',
    lastEntry: '',
    isActive: false,
    posts: [],
    comments: [],
    id: ''
  }

  constructor(
    private title: Title,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Foodie: Просмотр пользователя')

    this.route.data.subscribe((data) => {
      this.user = data['user']
    })
  }
}
