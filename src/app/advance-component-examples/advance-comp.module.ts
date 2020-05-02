import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvanceComponent } from './advance-comp.component';
import { MatCardModule } from '@angular/material';
import { NgTemplateComponent, NgTemplate2Component } from './ng-template/ng-template-example.component';
import { Routes, RouterModule } from '@angular/router';
import {
  ContentProjectionExampleComponent,
  AuthFormComponent
} from './content-projection/content-projection-example.component';
import { FormsModule } from '@angular/forms';
import {
  ContentProjectionExample2Component,
  AuthForm2Component
} from './content-projection/content-projection-example-2.component';

const routes: Routes = [{ path: '', component: AdvanceComponent }];
@NgModule({
  declarations: [
    AdvanceComponent,
    NgTemplateComponent,
    NgTemplate2Component,
    ContentProjectionExampleComponent,
    AuthFormComponent,
    ContentProjectionExample2Component,
    AuthForm2Component
  ],
  imports: [CommonModule, RouterModule.forChild(routes), MatCardModule, FormsModule]
})
export class AdvanceComponentModule {}
