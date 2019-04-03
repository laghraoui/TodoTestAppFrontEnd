import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

// l class makhashach t7at mabin @component w class ListTodosComponent sinn ghaykune compilation error !
// f ts bla mane7taju ndeclarew les variables kan definiwhum nichan f constructor !
export class Todo{
  constructor(
    public id : number,
    public description : string,
    public done : boolean,
    public targetDate : Date
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {

  todos: Todo[]
  /*= [ new Todo(1, 'Learn how to Dance', false, new Date), new Todo(2, 'Learn how to Become an Angular expert', false, new Date)  new Todo(3, 'Visit Australia', false, new Date),    new Todo(4, 'Watch anime', true, new Date),    new Todo(5, 'Just sleep', true, new Date) ] */
  message: String

  constructor(
    private todoService : TodoDataService,
    private router : Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  updateTodo(id){
    console.log(`update ${id}`)
    this.router.navigate(['todos', id])
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('mehdi').subscribe(
      response => 
            {
              console.log(response)
              this.todos = response
            } 
    )
  }

  deleteTodo(id){
    console.log(`delete todo number ${id}`)
    this.todoService.deleteTodo('mehdi', id).subscribe(
      response => 
            {
              console.log(response)
              this.message = `Todo ${id} deleted successfully !`
              this.refreshTodos();
            } 
    )
  }

  addTodo(){
    this.router.navigate(['todos', -1])
  }

}
