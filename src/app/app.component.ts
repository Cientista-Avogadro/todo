import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: String = 'Minha Lista de Tarefa';
  public taskForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: [
        '',
        Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(60),
          Validators.required,
        ]),
      ],
    });

    this.todos.push(new Todo(1, 'ir ao supermercado', false));
    this.todos.push(new Todo(2, 'comprar pão', false));
    this.todos.push(new Todo(3, 'cortar o cabelo', true));
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    index !== -1 && this.todos.splice(index, 1);
  }

  markAsDone(todo: Todo) {
    todo.done = true;
  }

  markAsUndone(todo: Todo) {
    todo.done = false;
  }
}
