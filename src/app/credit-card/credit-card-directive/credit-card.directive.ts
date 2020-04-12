import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[credit-card]'
})
export class CreditCardDirective {
  // element is the DOM Node which i want access to - input element...
  // writing my attribute-directive in the node gives me that element
  constructor(private element: ElementRef) {
    console.log(element); // Access to DOM element - Input element in this case
  }

  // HostBinding - binding to a property of an element
  /** HostBinding allows us to communicate our host node at a property or a changed value of a property via this directive
   * binding to style.border property of input node
   * `border` is my HostBinding property that i am creating.
   *
   * @HostBinding('class') classes = 'a b c'    binds to a class..it will give access to 'a b c' classes of te host element
   */

  // this gives access to class property...now you can add or remove class conditionaly
  // @HostBinding('class') classes;

  @HostBinding('style.border')
  border: string;

  // In HostListener pass the name of the event you want to listen to. HostListener is an eventListener
  // Host is the element that we have bounded directive to. $event - array of string we want to listen to
  // @MDN: The `input` event fires when the value of an <input>, <select>, or <textarea> element has been changed.
  // onkeyDown is my custom fn executed when `input` event is fired. onkeyDown would be renamed to mykeyDown

  @HostListener('input', ['$event'])
  onkeyDown(event: KeyboardEvent) {
    console.log(event);

    // LOGIC: find the input val, trim any whitespaces, accept only 16 digits - ignoring no entered later, after each 4 digit add space

    const input = event.target as HTMLInputElement;

    let trimmed = input.value.replace(/\s+/g, '');
    if (trimmed.length > 16) {
      trimmed = trimmed.substr(0, 16);
    }

    const numbers = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4));
    }

    input.value = numbers.join(' ');

    // if input is not a number..show red border
    this.border = '';
    // this.classes = '';
    if (/[^\d]+/.test(trimmed)) {
      this.border = '1px solid red';
      // this.classes = 'mat-form-field-invalid ';    // adding a class if error occurs
    }
  }
}
