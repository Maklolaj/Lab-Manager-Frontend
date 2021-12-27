import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DeleteResourceDialog,
  ModifyResourceDialog,
  ResourcesComponent,
} from './resources/resources.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ResourceCreatorComponent } from './resource-creator/resource-creator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ResourcesComponent,
    ResourceCreatorComponent,
    DeleteResourceDialog,
    ModifyResourceDialog,
  ],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [
    ResourcesComponent,
    ResourceCreatorComponent,
    DeleteResourceDialog,
    ModifyResourceDialog,
  ],
})
export class AdminPanelModule {}
