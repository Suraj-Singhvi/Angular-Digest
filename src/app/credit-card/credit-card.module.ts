import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardComponent } from './credit-card.component';
import { CreditCardDirective } from './credit-card-directive/credit-card.directive';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule, MatInputModule } from '@angular/material';
import { TooltipDirective } from './tooltip-directive/tooltip.directive';

const routes: Routes = [
  {
    path: '',
    component: CreditCardComponent
  }
];

@NgModule({
  declarations: [CreditCardComponent, CreditCardDirective, TooltipDirective],
  imports: [CommonModule, RouterModule.forChild(routes), MatCardModule, MatInputModule]
})
export class CreditCardModule {}
