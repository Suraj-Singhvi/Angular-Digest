import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildToParentCommunicationComponent } from './child-to-parent-communication.component';

const routes: Routes = [{ path: '', component: ChildToParentCommunicationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildToParentCommunicationRoutingModule {}
