import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public todos: any[] = [];
  /**
   *
   */
  constructor() {
    this.todos.push('ir ao supermercado');
    this.todos.push('comprar pão');
    this.todos.push('cortar o cabelo');
  }
}
