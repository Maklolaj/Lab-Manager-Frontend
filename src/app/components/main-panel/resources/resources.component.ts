import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { IItemModel } from 'src/app/models/IItemModel';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent implements OnInit {
  constructor(private itemService: ItemService, public datepipe: DatePipe) {}

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  itemList: IItemModel[];

  ngOnInit(): void {
    this.itemService.getAllItems().subscribe((x) => {
      this.itemList = x;
    });
  }
}
