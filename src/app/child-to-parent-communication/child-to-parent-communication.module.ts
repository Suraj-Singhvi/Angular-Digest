import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildToParentCommunicationRoutingModule } from './child-to-parent-communication-routing.module';
import { ChildToParentCommunicationComponent } from './child-to-parent-communication.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [ChildToParentCommunicationComponent, ParentComponent, ChildComponent],
  imports: [CommonModule, ChildToParentCommunicationRoutingModule]
})
export class ChildToParentCommunicationModule {}
