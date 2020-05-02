import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content-projection-example-1',
  template: `
    <div>
      <!-- There are two forms displayed on this component -->
      <auth-form (submitted)="createUser($event)">
        <!-- h3 tag is injected into the auth-form in place of the ng-content tag -->
        <h3>Create account</h3>
      </auth-form>
      <auth-form (submitted)="createUser($event)">
        <!-- h3 tag is injected into the auth-form in place of the ng-content tag -->
        <h3>Login Form</h3>
      </auth-form>
    </div>
  `
})
export class ContentProjectionExampleComponent {
  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'auth-form',
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel />
        </label>
        <br />
        <label>
          Password
          <input type="password" name="password" ngModel />
        </label>
        <br />
        <button type="submit">
          Submit
        </button>
      </form>
      <hr />
    </div>
  `
})
export class AuthFormComponent {
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
export interface User {
  email: string;
  password: string;
}
