import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentCommunicationComponent } from './component-communication.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentCommunicationComponent
  },
  {
    path: 'parent-to-child',
    loadChildren: () =>
      import('../parent-to-child-communication/parent-to-child-communication.module').then(
        m => m.ParentToChildCommunicationModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentCommunicationRoutingModule {}
