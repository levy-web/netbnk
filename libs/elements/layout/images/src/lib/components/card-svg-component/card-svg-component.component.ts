import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-card-svg-component',
  templateUrl: './card-svg-component.component.html',
  styleUrls: ['./card-svg-component.component.scss'],
})
export class CardSvgComponentComponent {
  @Input({ required: true }) imageSrc!: string;
}
