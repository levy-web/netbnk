import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NormalButtonComponent } from './normal-button/normal-button.component';
import { SliderButtonComponent } from './slider-button/slider-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NormalButtonComponent, SliderButtonComponent],
})
export class ButtonsModule {}
