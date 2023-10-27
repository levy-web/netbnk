import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSvgComponentComponent } from './components/card-svg-component/card-svg-component.component';
import { PillSvgComponentComponent } from './components/pill-svg-component/pill-svg-component.component';
import { StackedSvgComponentComponent } from './components/stacked-svg-component/stacked-svg-component.component';
import { WindowSvgComponentComponent } from './components/window-svg-component/window-svg-component.component';
import { ImageContainerComponentComponent } from './components/image-container-component/image-container-component.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CardSvgComponentComponent,
    PillSvgComponentComponent,
    StackedSvgComponentComponent,
    WindowSvgComponentComponent,
    ImageContainerComponentComponent,
  ],
  exports: [ImageContainerComponentComponent],
})
export class ImagesModule {}
