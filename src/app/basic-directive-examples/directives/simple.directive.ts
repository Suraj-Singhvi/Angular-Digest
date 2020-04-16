import { Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  // selector: 'h1, h3, [changeText]'
  selector: 'h1, h3, [changeText], [first]'
})
export class SimpleDirective {
  // <app-child [first]="'another message from parent to its child'"></app-child>
  // in above example, [first] is my directive Input hence we need to write @Input() first in directive

  // But <app-child first="hey there"></app-child>   in this case no @input in needed inner html is replaced successfully here
  // nut if we use [first] with bracket wee need to use @input

  @Input() first;

  @HostBinding() innerText = 'Inner Text of the element is replaced by directive';
}

@Directive({
  selector: '[second]'
})
export class AnotherSimpleDirective {
  @Input() second;

  @HostBinding() get innerText() {
    return this.second;
  }

  // example: #3
  // added a click event listner & fn that you want to exec when that happened...name of the fn can be anything you want.
  // @HostListener('click') myOnClick() {
  //   console.log('clicked');
  // }

  // add $event..when you want to see what kind of event was passed
  @HostListener('click', ['$event']) myOnClick($event) {
    console.log('clicked', $event);
    // since the innerText is bound to the 'second' ..on clicking, in the event handler if i update the text here...inner text is updated
    this.second = 'clicked';
  }
}
