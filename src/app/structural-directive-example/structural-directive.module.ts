import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyForDirective } from './my-for-directive/my-for.directive';
import { StructuralDirectiveExampleComponent } from './structural-directive-example.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: StructuralDirectiveExampleComponent
  }
];
@NgModule({
  declarations: [MyForDirective, StructuralDirectiveExampleComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatCardModule]
})
export class StructuralDirectiveModule {}
