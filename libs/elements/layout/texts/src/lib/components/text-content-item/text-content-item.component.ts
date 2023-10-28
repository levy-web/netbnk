import { Component, Input } from '@angular/core';

import { ContentText } from 'texts'

@Component({
  selector: 'lib-text-content-item',
  templateUrl: './text-content-item.component.html',
  styleUrls: ['./text-content-item.component.scss'],
})
export class TextContentItemComponent {
  @Input() content!: ContentText;
}
