import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatMenuModule, MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatButtonModule, MatMenuModule, RouterModule],
  exports: [HeaderComponent]
})
export class HeaderModule {}
