import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public todos: any[] = [];
  public title: String = 'Minha Lista de Tarefa';

  constructor() {
    this.todos.push('ir ao supermercado');
    this.todos.push('comprar pão');
    this.todos.push('cortar o cabelo');
  }
}
