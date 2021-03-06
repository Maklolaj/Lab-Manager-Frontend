import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const material = [
  MatButtonModule,
  MatSliderModule,
  MatToolbarModule,
  MatIconModule,
  MatBadgeModule,
  MatTableModule,
  MatTabsModule,
  MatSidenavModule,
  MatRadioModule,
  MatCheckboxModule,
  MatChipsModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatStepperModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatMenuModule,
  MatListModule,
  MatInputModule,
  MatGridListModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatSortModule,
  MatNativeDateModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatSnackBarModule,
];

@NgModule({
  declarations: [],
  imports: [material],
  exports: [material],
})
export class MaterialModule {}
