import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SendcompdataService {

  allItems = [
    { description: 'eat', done: false },
    { description: 'sleep', done: false },
    { description: 'play', done: true },
    { description: 'laugh', done: false },
  ];

  editValue = true;
  description = ""

  constructor() { }

  setTask(description: string){
    this.allItems.unshift({description, done : false});
  }

  getTask() {
      return this.allItems;
  }

  recieveFromView(editRecieved : boolean){
    this.editValue = editRecieved
  }
  
  sendToCreate(){
    return this.editValue
  }

  takeDescription(description : string){
    this.description=description
  }

  sendDescription(){
    return this.description
  }
}
