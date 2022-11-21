import { Component, OnInit, Input, Output } from '@angular/core';
import { SendcompdataService } from 'src/app/services/sendcompdata.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private taskSend : SendcompdataService) { }

  ngOnInit(): void {
  }

//taking data in input and sending it into addItem then to setTask in sendcompdata.service.ts//
  addItem(description: string) {
    this.taskSend.setTask(description)}

}
