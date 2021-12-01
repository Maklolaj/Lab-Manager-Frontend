import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Resource } from 'src/app/models/IResourceModel';

@Component({
  selector: 'app-resource-creator',
  templateUrl: './resource-creator.component.html',
  styleUrls: ['./resource-creator.component.scss'],
})
export class ResourceCreatorComponent implements OnInit {
  resource = new Resource();

  constructor() {}

  ngOnInit(): void {}

  dateChange(event: MatDatepickerInputEvent<Date>): void {
    console.log(`Data: ${event.value}`);
    console.log(this.resource);
  }

  submitResourceCreation(): void {
    alert(`Zasób ${this.resource.name} został dodany`);
  }

  resetFormValues(): void {
    this.resource = new Resource();
  }
}
