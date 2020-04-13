import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive-example',
  templateUrl: './structural-directive-example.component.html',
  styleUrls: ['./structural-directive-example.component.scss']
})
export class StructuralDirectiveExampleComponent implements OnInit {
  items: any;
  constructor() {}

  ngOnInit() {
    this.items = [
      { name: 'john', age: 25 },
      { name: 'jane', age: 22 }
    ];

    setTimeout(() => {
      /** this.items.push({ name: 'smith', age: 24 });   // if we use this approach ngFor will work but our custom implementation wont
       * as angular uses powerful change detection and only update what is necessary.
       */
      this.items = [...this.items, { name: 'smith', age: 24 }]; // push new item after 2s
    }, 2000);
  }
}
