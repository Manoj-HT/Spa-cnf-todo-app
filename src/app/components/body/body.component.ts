import { Component, OnInit, Input, Output } from '@angular/core';
import { Item } from 'src/app/item';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  filter: 'all' | 'active' | 'done' = 'all';

  @Output()
  allItems = [
    { description: 'eat', done: false },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) => this.filter === 'done' ? item.done : !item.done);
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
