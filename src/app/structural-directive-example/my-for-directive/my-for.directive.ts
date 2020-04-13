import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  // let item of items;   myFor`Of` is set directly by Angular compiler based on what is used in template `of` or `in`
  // let item in items;  in this case we will have to use myForIn
  selector: '[myFor][myForOf]'
})
export class MyForDirective {
  // for ech item inside a collection we want to embed a view inside our templateRef

  // anytime myForOf changes..we will get te new collection
  @Input()
  set myForOf(collection) {
    /** try commenting just this line and see myFor...the whole loop will be printed again if new item is added to collection.
     * so, to avoid this clear existing view and then create one one
     */
    this.view.clear();

    // console.log(collection); // [{ name: 'john', age: 25 },{ name: 'jane', age: 13 }];
    collection.forEach((item, index) => {
      // since we are binding to a template to add DOM elements we use createEmbeddedView
      // Embedded views attach to other views no added input. It s a view that is created for the view nodes specified in the ng-template.

      // creates a template element for each item in our collection
      this.view.createEmbeddedView(this.template, {
        $implicit: item, // bind item obj as an implicit value. let-item="some val explicitly specified". just let-item is implicit
        index // longform=> index: index
      });
    });
  }

  constructor(private view: ViewContainerRef, private template: TemplateRef<any>) {}
}
