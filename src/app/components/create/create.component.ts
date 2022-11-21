import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SendcompdataService } from 'src/app/services/sendcompdata.service';
import { Item } from "../../item";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  editable = this.editValue.sendToCreate();

  constructor(private taskSend : SendcompdataService, private editValue : SendcompdataService) { }

  ngOnInit(): void {
  }

  @Input() item!: Item;
  @Input() newItem!: string;
  @Output() remove = new EventEmitter<Item>();

//taking data in input and sending it into addItem then to setTask in sendcompdata.service.ts//
  addItem(description: string) {
    this.taskSend.setTask(description)}

    saveItem(description: string) {
      console.log(description)
      if (!description) return;
      this.editable = false;
      this.item.description = description;
    }

}
