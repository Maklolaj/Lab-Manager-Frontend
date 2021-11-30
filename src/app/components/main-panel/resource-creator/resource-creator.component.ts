import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-resource-creator',
  templateUrl: './resource-creator.component.html',
  styleUrls: ['./resource-creator.component.scss'],
})
export class ResourceCreatorComponent implements OnInit {
  //resource = new Resource();

  constructor() {}

  ngOnInit(): void {}

  dateChange(event: MatDatepickerInputEvent<Date>): void {
    console.log(`Data: ${event.value}`);
  }
}
