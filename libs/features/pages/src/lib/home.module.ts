import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesModule } from 'images'
import { ButtonsModule } from 'buttons'

import { HomeRoutingModule } from './home.routes';
import { NetbankHomeComponent } from './netbank-home/netbank-home.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, ImagesModule, ButtonsModule],
  declarations: [NetbankHomeComponent],
  exports: [],
})
export class HomeModule {}
