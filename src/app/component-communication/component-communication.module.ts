import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentCommunicationRoutingModule } from './component-communication-routing.module';
import { ComponentCommunicationComponent } from './component-communication.component';

@NgModule({
  declarations: [ComponentCommunicationComponent],
  imports: [CommonModule, ComponentCommunicationRoutingModule]
})
export class ComponentCommunicationModule {}
