import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextContentItemComponent } from './components/text-content-item/text-content-item.component';
import { TextSectionComponent } from './components/text-section/text-section.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TextContentItemComponent, TextSectionComponent],
})
export class TextModule {}
