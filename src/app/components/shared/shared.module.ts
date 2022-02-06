import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupsComponent } from './popups/popups.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [PopupsComponent],
  imports: [CommonModule, MaterialModule],
  exports: [PopupsComponent],
})
export class SharedModule {}
