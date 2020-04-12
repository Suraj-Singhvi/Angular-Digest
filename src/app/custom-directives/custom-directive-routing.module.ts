import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomDirectiveComponent } from './custom-directive.component';

const routes: Routes = [
  {
    path: '',
    component: CustomDirectiveComponent
  },
  {
    path: 'credit-card',
    loadChildren: () => import('../credit-card/credit-card.module').then(m => m.CreditCardModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomDirectivesRoutingModule {}
