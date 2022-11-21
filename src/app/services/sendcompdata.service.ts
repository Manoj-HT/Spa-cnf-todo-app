import { Injectable } from '@angular/core';
import { Item } from 'src/app/item';

@Injectable({
  providedIn: 'root'
})

export class SendcompdataService {

  // vao to take in data //
  allItems = [
    { description: 'eat', done: false },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];

  constructor() { }

  // data coming from additem in create.component.ts//
  setTask(description: string){
    this.allItems.unshift({description, done : false});
  }

  
  getTask() {
      return this.allItems;
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

}
