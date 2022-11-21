import { Component, OnInit, Input, Output } from '@angular/core';
import { Item } from 'src/app/item';
import { SendcompdataService } from 'src/app/services/sendcompdata.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  //adding filters//
  filter: 'all' | 'active' | 'done' = 'all';
  //recieving into a variable//
  recievedItems = this.taskRecieve.allItems;

  
  get items() {
    if (this.filter === 'all') {
      return this.recievedItems;
    }
    return this.recievedItems.filter((item) => this.filter === 'done' ? item.done : !item.done);
  }
 
  constructor(private taskRecieve : SendcompdataService) { }

  ngOnInit(): void {
  }
  
  remove(item: Item) {
    this.recievedItems.splice(this.recievedItems.indexOf(item), 1);
  }

}
