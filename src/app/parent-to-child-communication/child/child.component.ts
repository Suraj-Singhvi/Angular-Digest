import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <mat-card class="child-card">
      <mat-card-title>Child Component</mat-card-title>
      here is some message from parent:

      <p>{{ childObj.sender }} AKA {{ aliasName }}, Age {{ age }}:- quoted {{ childObj.message }}</p>
      <form class="example-form">
        <mat-form-field class="example-full-width">
          <input matInput placeholder="Favorite food" [value]="childMessage" />
        </mat-form-field>
      </form>
    </mat-card>
  `
})
export class ChildComponent implements OnInit {
  @Input() childMessage;
  @Input() childObj;
  // tslint:disable-next-line: no-input-rename
  @Input('nickName') aliasName;
  @Input() age;

  constructor() {}

  ngOnInit() {
    console.log('age is of type: ', typeof this.age);
  }
}
