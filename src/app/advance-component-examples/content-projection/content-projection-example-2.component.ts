//#region ng-content example 2

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content-projection-example-2',
  template: `
    <div>
      <!-- There are two forms displayed on this component -->
      <auth-form-2 (submitted)="createUser($event)">
        <!-- h3 tag & Button is injected into the auth-form in place of the ng-content tag & selector
         is used to determine which element to place where -->
        <h3>Create account</h3>
        <button type="submit">Sign up</button>
      </auth-form-2>
      <auth-form-2 (submitted)="createUser($event)">
        <!-- h3 tag & Button is injected into the auth-form in place of the ng-content tag & selector
            is used to determine which element to place where -->
        <h3>Login Form</h3>
        <button type="submit">Sign in</button>
      </auth-form-2>
    </div>
  `
})
export class ContentProjectionExample2Component {
  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'auth-form-2',
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
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
        <ng-content select="button"></ng-content>
      </form>
      <hr />
    </div>
  `
})
export class AuthForm2Component {
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}

export interface User {
  email: string;
  password: string;
}

//#endregion
