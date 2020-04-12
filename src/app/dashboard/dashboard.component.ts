import { Component, OnInit } from '@angular/core';
import { Topic } from '../shared/interface/topic.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  topics: Topic[];
  constructor() {}

  ngOnInit() {
    this.topics = [
      {
        name: 'Component Communication',
        description: 'Component Communication invokes sharing data between components',
        link: 'component-communication'
      },
      {
        name: 'Creating Dynamic Component',
        description: 'learn how to create dynamic components',
        link: 'dynamic-component'
      },
      {
        name: 'Directives',
        description: 'Examples for Directives',
        link: 'custom-directive'
      }
    ];
  }
}
