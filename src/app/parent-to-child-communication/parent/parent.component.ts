import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <mat-card class="parent-card">
      <form class="example-form">
        <mat-form-field class="example-full-width">
          <input
            matInput
            placeholder="Favorite food"
            [value]="parentMessage"
            [(ngModel)]="parentMessage"
            name="something"
          />
        </mat-form-field>
      </form>

      <app-child
        class="child-message"
        [childMessage]="parentMessage"
        [childObj]="parentObj"
        [nickName]="'GodFather'"
        [age]="64"
      ></app-child>
    </mat-card>
  `,
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  parentMessage = 'This message is from Parent';
  parentObj = {
    sender: 'Howard Stark',
    message: 'You know nothing.'
  };
  constructor() {}
}
