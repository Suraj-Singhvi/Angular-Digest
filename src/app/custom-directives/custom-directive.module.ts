import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDirectiveComponent } from './custom-directive.component';

import { SharedModule } from '../shared/shared.module';
import { CustomDirectivesRoutingModule } from './custom-directive-routing.module';

@NgModule({
  declarations: [CustomDirectiveComponent],
  imports: [CommonModule, CustomDirectivesRoutingModule, SharedModule]
})
export class CustomDirectiveModule {}
