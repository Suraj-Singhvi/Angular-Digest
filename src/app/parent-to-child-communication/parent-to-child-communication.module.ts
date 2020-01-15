import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ParentToChildCommunicationComponent } from './parent-to-child-communication.component';
import { ParentToChildCommunicationRoutingModule } from './parent-to-child-communication-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ParentComponent, ChildComponent, ParentToChildCommunicationComponent],
  imports: [CommonModule, ParentToChildCommunicationRoutingModule, MatCardModule, MatInputModule, FormsModule]
})
export class ParentToChildCommunicationModule {}
