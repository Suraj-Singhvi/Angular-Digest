import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsListComponent } from './components/topics-list/topics-list.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TopicsListComponent],
  imports: [CommonModule, MatCardModule, RouterModule],
  exports: [TopicsListComponent]
})
export class SharedModule {}
