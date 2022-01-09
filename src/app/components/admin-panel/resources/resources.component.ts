import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { IItemModel } from 'src/app/models/IItemModel';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent implements OnInit {
  constructor(
    private itemService: ItemService,
    public datepipe: DatePipe,
    public dialog: MatDialog
  ) {}

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  itemList: IItemModel[];

  ngOnInit(): void {
    this.itemService.getAllItems().subscribe((x) => {
      this.itemList = x;
    });
  }

  openDeleteConfirmationDialog(item: IItemModel): void {
    const dialogRef = this.dialog.open(DeleteResourceDialog, {
      width: '600px',
      data: { item },
    });

    dialogRef.afterClosed().subscribe((result: IItemModel) => {
      if (result) {
        alert(`Usunięto ${result.name}`);
        this.itemService.deleteItem(result).subscribe();
      } else {
        alert(`Operacja nieudana`);
      }
    });
  }

  openModifyDialog(item: IItemModel): void {
    const dialogRef = this.dialog.open(ModifyResourceDialog, {
      width: '600px',
      data: { item },
    });

    dialogRef.afterClosed().subscribe((result: IItemModel) => {
      if (result) {
        alert(`Zmodyfikowano ${result.name}`);
        this.itemService.modifyItem(result).subscribe();
      } else {
        alert(`Operacja nieudana`);
      }
    });
  }
}

@Component({
  selector: 'app-delete-resource-dialog',
  templateUrl: './resources-dialogs/delete-resource-dialog.html',
})
export class DeleteResourceDialog {
  constructor(
    public dialogRef: MatDialogRef<DeleteResourceDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-modify-resource-dialog',
  templateUrl: './resources-dialogs/modify-resource-dialog.html',
})
export class ModifyResourceDialog {
  constructor(
    public dialogRef: MatDialogRef<ModifyResourceDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  itemToUpdate: IItemModel = {
    description: '',
    manufacturer: '',
    name: '',
    productionDate: new Date(),
    id: 0,
    isDamaged: false,
    isDeleted: false,
  };

  onNoClick(): void {
    this.dialogRef.close();
  }
}
