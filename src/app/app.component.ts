import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { TodoState } from './state/todo.state';
import { AddTodo, DeleteTodo, TodoInterface, ToggleCompletion } from './state/model/todo.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todoList: TodoInterface[] = []
  todoForm!: FormGroup;
  maxLength: number = 200

  constructor(
    private store: Store,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      newTodo: ['', [Validators.required, Validators.maxLength(this.maxLength)]]
    })

    this.store.select(TodoState.getTodoList).subscribe({
      next: (todoList) => {
        this.todoList = todoList
      }
    })
  }

  addTodo() {
    if (this.todoForm.valid) {
      this.store.dispatch(new AddTodo({
        text: this.todoForm.value.newTodo.trim(),
        isCompleted: false
      }))
      this.todoForm.reset()
    }
  }

  toggleCompletion(id?: number) {
    if (id !== undefined) {
      this.store.dispatch(new ToggleCompletion(id))
    }
  }

  deleteTodo(id?: number) {
    if (id !== undefined) {
      this.store.dispatch(new DeleteTodo(id))
    }
  }
}
