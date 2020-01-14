import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentCommunicationRoutingModule } from './component-communication-routing.module';
import { ComponentCommunicationComponent } from './component-communication.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ComponentCommunicationComponent],
  imports: [CommonModule, ComponentCommunicationRoutingModule, SharedModule]
})
export class ComponentCommunicationModule {}
