import { Component, OnInit } from '@angular/core';
import { Topic } from '../shared/interface/topic.interface';

@Component({
  selector: 'app-custom-directives',
  template: `
    <p>custom-directives works!</p>

    <router-outlet></router-outlet>

    <p>custom-directives ends here!</p>

    <app-topics-list [topics]="topics"></app-topics-list>
  `
})
export class CustomDirectiveComponent implements OnInit {
  topics: Topic[];
  constructor() {}

  ngOnInit() {
    this.topics = [
      {
        name: 'Credit Card Directive',
        description: 'creating a custom credit card directive',
        link: 'credit-card'
      },
      {
        name: 'Structural Directive',
        description: 'learn how to create your own structural directive',
        link: 'structural-directive'
      }
    ];
  }
}
