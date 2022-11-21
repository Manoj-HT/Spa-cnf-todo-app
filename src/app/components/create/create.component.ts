import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor() { }

  allItems = [
    { description: 'eat', done: false },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];
  ngOnInit(): void {
  }

  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }
}
