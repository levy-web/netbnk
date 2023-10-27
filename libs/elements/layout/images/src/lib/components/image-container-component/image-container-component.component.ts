import { Component, Input } from '@angular/core';

import { ImageConfig, ImageVisualisation } from 'image';

@Component({
  selector: 'lib-image-container-component',
  templateUrl: './image-container-component.component.html',
  styleUrls: ['./image-container-component.component.scss'],
})
export class ImageContainerComponentComponent {

    /**
   * Image input with types
   * It accepts one image input
   */
    @Input() imageConfig!: ImageConfig;
    imgVisualisation = ImageVisualisation

      /**
   * Cases for Image visualisation to be used as classes in HTML and scss component files 
   * The Cases include pill, stacked, window and card
   */
    getImageClass(imageConfig: ImageConfig): string {
      switch (imageConfig.visualisation) {
        case ImageVisualisation.Pill:
          return 'pill';
        case ImageVisualisation.Stacked:
          return 'stacked';
        case ImageVisualisation.Window:
          return 'window';
        case ImageVisualisation.Card:
          return 'card';
        default:
          return '';
      }
    }

  

}
