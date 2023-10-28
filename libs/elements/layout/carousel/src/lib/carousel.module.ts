import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NextDirective } from './directives/next.directive';
import { PrevDirective } from './directives/prev.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [CarouselComponent, NextDirective, PrevDirective],
  exports: [CarouselComponent],
})
export class CarouselModule {}
