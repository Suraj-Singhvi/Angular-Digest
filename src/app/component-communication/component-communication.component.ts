import { Component, OnInit } from '@angular/core';
import { Topic } from '../shared/interface/topic.interface';

@Component({
  selector: 'app-component-communication',
  templateUrl: './component-communication.component.html',
  styleUrls: ['./component-communication.component.scss']
})
export class ComponentCommunicationComponent implements OnInit {
  topics: Topic[];
  constructor() {}

  ngOnInit() {
    this.topics = [
      {
        name: 'Parent to child communication',
        description: 'Component Communication invokes sharing data between components',
        link: 'parent-to-child'
      },
      {
        name: 'child-to-parent',
        description: 'learn how to create dynamic components',
        link: 'dynamic-component'
      }
    ];
  }
}
