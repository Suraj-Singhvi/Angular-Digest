import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentToChildCommunicationComponent } from './parent-to-child-communication.component';

const routes: Routes = [
  {
    path: '',
    component: ParentToChildCommunicationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: []
})
export class ParentToChildCommunicationRoutingModule {}
