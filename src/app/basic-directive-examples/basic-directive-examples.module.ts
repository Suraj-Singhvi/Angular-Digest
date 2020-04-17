import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicDirectiveExamplesComponent } from './basic-directive-examples.component';
import { SimpleDirective, AnotherSimpleDirective } from './directives/simple.directive';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { DummyParentComponent, DummyChildComponent } from './dummy-component/dummy.component';
import { TrackingDirective } from './directives/track.directive';

const routes: Routes = [
  {
    path: '',
    component: BasicDirectiveExamplesComponent
  }
];

@NgModule({
  declarations: [
    BasicDirectiveExamplesComponent,
    SimpleDirective,
    TrackingDirective,
    AnotherSimpleDirective,
    DummyParentComponent,
    DummyChildComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes), MatCardModule]
})
export class BasicDirectivesExampleModule {}
