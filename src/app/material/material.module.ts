import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';

const material = [ MatButtonModule, MatSliderModule ]

@NgModule({
  declarations: [],
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
