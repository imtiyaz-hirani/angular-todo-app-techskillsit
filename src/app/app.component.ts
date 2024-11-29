 import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-root',
  imports: [NgFor,NgIf, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  todoList: any[] =[]; 
  isFormVisible: boolean = false; 
  message: any; 
  startDate:any; 
  endDate:any; 

  constructor(){ 
    let todo1 = {
      message: 'An item',
      startDate: '2024-11-12',
      endDate:'2024-11-15',
      status: 'PENDING'
    }
    let todo2 = {
      message: 'A completed item',
      startDate: '2024-11-12',
      endDate:'2024-11-15',
      status: 'COMPLETED'
    }
    let todo3 = {
      message: 'An archived item',
      startDate: '2024-11-12',
      endDate:'2024-11-15',
      status: 'ARCHIVED'
    }

    this.todoList.push(todo1);
    this.todoList.push(todo2);
    this.todoList.push(todo3);
    
  }
  
  showAddForm(){
    this.isFormVisible = !this.isFormVisible
  }

  addTodo(){
    console.log(this.message)
    console.log(this.startDate)
    console.log(this.endDate)

    let todo = {
      message: this.message,
      startDate: this.startDate,
      endDate:this.endDate,
      status: 'PENDING'
    }
    this.todoList.push(todo);
    this.isFormVisible = !this.isFormVisible

  }

  transferToCompleted(index:number){
    this.todoList[index].status = 'COMPLETED'
  }

  archive(index:number){
    this.todoList[index].status = 'ARCHIVED'
  }

  onDelete(index:number){
    this.todoList.splice(index,1);
  }

  onRestore(index:number){
    this.todoList[index].status = 'PENDING'
  }
}
 