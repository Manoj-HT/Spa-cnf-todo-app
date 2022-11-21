import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { Item } from "../../item";
import { SendcompdataService } from 'src/app/services/sendcompdata.service';

@Component({
  selector: 'app-viewlist',
  templateUrl: './viewlist.component.html',
  styleUrls: ['./viewlist.component.css']
})
export class ViewlistComponent implements OnInit {

  editable = false;
  constructor(private editSend : SendcompdataService) { }

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
  
  sendEditable(){
    return this.editSend.recieveFromView(this.editable)
  }
}
