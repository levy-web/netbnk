import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

export const BNK_HOME_ROUTES: Route[] = [
  /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
];

@NgModule({
  imports: [RouterModule.forChild(BNK_HOME_ROUTES)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
