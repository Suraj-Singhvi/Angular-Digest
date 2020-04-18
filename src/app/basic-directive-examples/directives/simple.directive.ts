import {
  Directive,
  HostBinding,
  Input,
  HostListener,
  ElementRef,
  ViewContainerRef,
  TemplateRef,
  AfterViewInit
} from '@angular/core';

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

@Directive({ selector: '[third]' })
export class SimpleStructuralDirective implements AfterViewInit {
  constructor(private el: ElementRef, private template: TemplateRef<any>, private view: ViewContainerRef) {
    console.log(el.nativeElement);
  }
  ngAfterViewInit(): void {
    this.view.createEmbeddedView(this.template);
  }
}

@Directive({ selector: '[fourth]' })
export class StructuralWithDataBindingDirective implements AfterViewInit {
  @Input() set fourth(value) {
    this.view.createEmbeddedView(this.template, {
      $implicit: 'This is the value from the $implicit context'
    });
  }

  constructor(private el: ElementRef, private template: TemplateRef<any>, private view: ViewContainerRef) {
    console.log(el.nativeElement);
  }
  ngAfterViewInit(): void {}
}

@Directive({ selector: '[my][myFrom]' })
export class MyFromDirective implements AfterViewInit {
  // value of the input is destructured -
  @Input() set myFrom({ one, two, three }) {
    this.view.createEmbeddedView(this.template, {
      $implicit: one
    });
    this.view.createEmbeddedView(this.template, {
      $implicit: two
    });
    this.view.createEmbeddedView(this.template, {
      $implicit: three
    });
  }

  constructor(private el: ElementRef, private template: TemplateRef<any>, private view: ViewContainerRef) {
    console.log(el.nativeElement);
  }
  ngAfterViewInit(): void {}
}
