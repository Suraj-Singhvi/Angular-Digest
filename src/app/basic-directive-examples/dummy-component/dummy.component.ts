import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dummy-parent',
  template: `
    <app-child message="hey there"></app-child>
    <app-child [message]="'another message from parent to its child'"></app-child>

    <br />
    <app-child first="hey there"></app-child>
    <br />
    <app-child [first]="'another message from parent to its child with get replaced by directive'"></app-child>
    <br />
    <app-child [second]="'Message displayed will be from parent & not directive in this case '"></app-child>
  `
})
export class DummyParentComponent {}

@Component({
  selector: 'app-child',
  template: `
    <div>{{ message }}</div>
  `
})
export class DummyChildComponent {
  @Input() message;
}
