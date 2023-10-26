import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

export const BNK_ROUTES: Route[] = [
  { path: '*', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('home').then(
        (m) => m.HomeModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(BNK_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
