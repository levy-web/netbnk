import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routes';
import { NetbankHomeComponent } from './netbank-home/netbank-home.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [NetbankHomeComponent],
  exports: [],
})
export class HomeModule {}
