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
  },
  {
    path: 'structural-directive',
    loadChildren: () =>
      import('../structural-directive-example/structural-directive.module').then(m => m.StructuralDirectiveModule)
  },
  {
    path: 'simple-directive',
    loadChildren: () =>
      import('../basic-directive-examples/basic-directive-examples.module').then(m => m.BasicDirectivesExampleModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomDirectivesRoutingModule {}
