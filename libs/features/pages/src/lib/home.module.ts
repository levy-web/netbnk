import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesModule } from 'images'

import { HomeRoutingModule } from './home.routes';
import { NetbankHomeComponent } from './netbank-home/netbank-home.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, ImagesModule],
  declarations: [NetbankHomeComponent],
  exports: [],
})
export class HomeModule {}
