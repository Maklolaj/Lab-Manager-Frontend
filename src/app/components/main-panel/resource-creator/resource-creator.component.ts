import { Component, OnInit } from '@angular/core';
import { IResource } from 'src/app/models/IResourceModel';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-resource-creator',
  templateUrl: './resource-creator.component.html',
  styleUrls: ['./resource-creator.component.scss'],
})
export class ResourceCreatorComponent implements OnInit {
  resource = new IResource();

  constructor(private itemServie: ItemService) {}

  ngOnInit(): void {}

  submitResourceCreation(): void {
    if (this.resource.name) {
      alert(`Zasób ${this.resource.name} został dodany`);
      //this.itemServie.createItem(this.resource)
    } else {
      alert(`Operacja nieudana`);
    }
  }

  resetFormValues(): void {
    this.resource = new IResource();
  }
}
