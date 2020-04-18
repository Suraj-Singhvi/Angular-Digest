import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvanceComponent } from './advance-comp.component';
import { MatCardModule } from '@angular/material';
import { NgTemplateComponent, NgTemplate2Component } from './ng-template/ng-template-example.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: AdvanceComponent }];
@NgModule({
  declarations: [AdvanceComponent, NgTemplateComponent, NgTemplate2Component],
  imports: [CommonModule, RouterModule.forChild(routes), MatCardModule]
})
export class AdvanceComponentModule {}
