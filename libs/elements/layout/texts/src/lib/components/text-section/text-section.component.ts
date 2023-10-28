import { Component, Input } from '@angular/core';

import { HeroText } from 'texts';

@Component({
  selector: 'lib-text-section',
  templateUrl: './text-section.component.html',
  styleUrls: ['./text-section.component.scss'],
})
export class TextSectionComponent {
  @Input() herotexts!: HeroText;
}
