import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { Item } from "../../item";

@Component({
  selector: 'app-viewlist',
  templateUrl: './viewlist.component.html',
  styleUrls: ['./viewlist.component.css']
})
export class ViewlistComponent implements OnInit {

  editable = false;
  constructor() { }

  ngOnInit(): void {
  }
  @Input() item!: Item;
  @Input() newItem!: string;
  @Output() remove = new EventEmitter<Item>();

  saveItem(description: string) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;
  }

}
