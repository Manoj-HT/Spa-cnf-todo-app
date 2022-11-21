import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class SendcompdataService {

  // vao to take in data //
  allItems = [
    { description: 'eat', done: false },
    { description: 'sleep', done: false },
    { description: 'play', done: true },
    { description: 'laugh', done: false },
  ];

  editValue = true;

  constructor() { }

  // data coming from additem in create.component.ts, array add method//
  setTask(description: string){
    this.allItems.unshift({description, done : false});
  }

  //sending as is//
  getTask() {
      return this.allItems;
  }

  recieveFromView(editRecieved : boolean){
    this.editValue = editRecieved
    console.log(this.editValue)
  }
  
  sendToCreate(){
    console.log(this.editValue)
    return this.editValue
  }
}
