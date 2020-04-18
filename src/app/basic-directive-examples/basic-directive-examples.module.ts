import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicDirectiveExamplesComponent } from './basic-directive-examples.component';
import {
  SimpleDirective,
  AnotherSimpleDirective,
  SimpleStructuralDirective,
  StructuralWithDataBindingDirective,
  MyFromDirective
} from './directives/simple.directive';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { DummyParentComponent, DummyChildComponent } from './dummy-component/dummy.component';
import { TrackingDirective } from './directives/track.directive';
import { TemplateStorageComponent, SurroundDirective, TemplateService } from './directives/surround.directive';

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
    SimpleStructuralDirective,
    StructuralWithDataBindingDirective,
    MyFromDirective,
    SurroundDirective,
    TemplateStorageComponent,
    DummyParentComponent,
    DummyChildComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes), MatCardModule],
  providers: [TemplateService]
})
export class BasicDirectivesExampleModule {}
