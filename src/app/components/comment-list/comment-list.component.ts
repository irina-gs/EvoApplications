import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { AddCommentRequest } from 'src/app/interfaces/add-comment-request';
import { Author } from 'src/app/interfaces/author';
import { Comment } from 'src/app/interfaces/comment';
import { DataService } from 'src/app/services/data/data.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { UserState } from 'src/app/state/user.state';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  @Input() commentList: Comment[] = []

  newComment: AddCommentRequest = {
    text: ''
  }

  private user: Author = {
    id: '',
    avatar: '',
    firstName: '',
    lastName: '',
    middleName: ''
  }

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.select(UserState.getId).subscribe({
      next: (value) => {
        this.user.id = value ?? ''
      }
    })

    this.store.select(UserState.getAvatar).subscribe({
      next: (value) => {
        this.user.avatar = value ?? ''
      }
    })

    this.store.select(UserState.getFirstName).subscribe({
      next: (value) => {
        this.user.firstName = value ?? ''
      }
    })

    this.store.select(UserState.getLastName).subscribe({
      next: (value) => {
        this.user.lastName = value ?? ''
      }
    })

    this.store.select(UserState.getMiddleName).subscribe({
      next: (value) => {
        this.user.middleName = value ?? ''
      }
    })
  }

  addComment() {
    this.route.paramMap.subscribe(params => {
      const recipeId = params.get('id')
      if (recipeId) {
        this.postComment(recipeId)
      } else {
        this.showNotification()
      }
    })
  }

  private postComment(id: string) {
    this.dataService.addComment(id, this.newComment).subscribe({
      next: (response) => {
        this.newComment.text = ''

        const addedComment: Comment = {
          id: response.id,
          postId: response.postId,
          user: this.user,
          text: response.text,
          createdOn: response.createdOn,
          updatedOn: response.updatedOn
        }

        this.commentList.push(addedComment)
      }
    })
  }

  private showNotification() {
    this.notificationService.showNotification(
      'Ошибка!',
      'Что-то пошло не так. Попробуйте снова.',
      false
    )
  }
}
