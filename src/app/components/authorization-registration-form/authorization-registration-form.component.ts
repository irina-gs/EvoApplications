import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthorizationRequest } from 'src/app/interfaces/authorization-request';
import { Registration } from 'src/app/interfaces/registration';
import { DataService } from 'src/app/services/data/data.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { UpdateUser } from 'src/app/state/model/user.model';

@Component({
  selector: 'app-authorization-registration-form',
  templateUrl: './authorization-registration-form.component.html',
  styleUrls: ['./authorization-registration-form.component.css']
})
export class AuthorizationRegistrationFormComponent implements OnInit {
  @Input() title: string = ''
  @Input() buttonText: string = ''
  @Input() isRegistration: boolean = false

  form: FormGroup = new FormGroup({})
  private minLengthField: number = 4

  constructor(
    private dataService: DataService,
    private notificationService: NotificationService,
    private store: Store,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm()
  }

  private initForm() {
    if (this.isRegistration) {
      this.form = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(this.minLengthField)]],
        firstName: [''],
        lastName: [''],
        middleName: ['']
      })
    } else {
      this.form = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(this.minLengthField)]],
        quickSession: [false]
      })
    }
  }

  sendData() {
    if (this.form.invalid) {
      return
    }

    if (this.isRegistration) {
      const requestData: Registration = {
        username: this.form.value.username,
        password: this.form.value.password,
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        middleName: this.form.value.middleName
      }
      this.signUp(requestData)

    } else {
      const requestData: AuthorizationRequest = {
        username: this.form.value.username,
        password: this.form.value.password,
      }
      this.signIn(requestData, this.form.value.quickSession)
    }
  }

  private signUp(body: Registration) {
    this.dataService.signUp(body).subscribe({
      next: () => {
        this.showNotification()
        this.redirectToMainPage()
      }
    })
  }

  private signIn(body: AuthorizationRequest, isFast: boolean) {
    this.dataService.signIn(body, isFast).subscribe({
      next: (response) => {
        this.store.dispatch(new UpdateUser(response))
        this.redirectToMainPage()
      }
    })
  }

  private showNotification() {
    this.notificationService.showNotification(
      'Регистрация прошла успешно!',
      'Ваш аккаунт создан. Добро пожаловать!',
      true
    )
  }

  private redirectToMainPage() {
    this.router.navigateByUrl('/')
  }

  get username() {
    return this.form.get('username')
  }

  get password() {
    return this.form.get('password')
  }
}
