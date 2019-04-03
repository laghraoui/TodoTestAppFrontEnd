import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number
  todo : Todo

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute, //bach nakhdu l id li kayn f url !
    private router: Router
  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    /* we call data asynchrounsly via subscribe, while ngInit() method is completed execution, 
    it would directly start loading up the todo component.html. So at that point the object might be null */
    this.todo = new Todo(this.id, '', false, new Date());
    if(this.id != -1){
      this.todoService.retrieveTodo('mehdi', this.id).subscribe( data => this.todo = data )
    }
  }

  //updateTodo
  saveTodo(){
    if(this.id === -1){
      this.todoService.createTodo('mehdi', this.todo).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['todos'])}
      )
    }else{
      this.todoService.updateTodo('mehdi', this.id, this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        })
    }
  }

}
