import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { NetbankHomeComponent } from './netbank-home/netbank-home.component';

export const BNK_HOME_ROUTES: Route[] = [
   {path: '',  component: NetbankHomeComponent} 
];

@NgModule({
  imports: [RouterModule.forChild(BNK_HOME_ROUTES)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
