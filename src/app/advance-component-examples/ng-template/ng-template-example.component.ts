import { Component, ViewChild, AfterContentInit, ViewContainerRef, TemplateRef } from '@angular/core';

//#region `app-ng-template` simple ng-template example
@Component({
  selector: 'app-ng-template',
  template: `
    <!-- <ng-template>
      this content is not rendered from ng-template
    </ng-template> -->
    <h3>ng-template using templateRef queried with ViewChild & rendered with ViewContainerRef</h3>
    <ng-template #temp1>
      #example-1..this content is rendered from ng-template
    </ng-template>
  `
})
export class NgTemplateComponent implements AfterContentInit {
  // @ViewChild('temp1') template: TemplateRef;     // this works fine but gives error in IDE as

  // View queries are set before the ngAfterViewInit callback is called.
  // static - True to resolve query results before change detection runs, false to resolve after change detection. Defaults to false.
  @ViewChild('temp1', { static: true }) template: TemplateRef<HTMLElement>;

  constructor(private view: ViewContainerRef) {}

  ngAfterContentInit(): void {
    this.view.createEmbeddedView(this.template);

    // adding it multiple times will add the ng-template content multiple times
    // this.view.createEmbeddedView(this.template);
    // this.view.createEmbeddedView(this.template);
  }
}
//#endregion

//#region ng-template with ngTempalteOutlet
@Component({
  selector: 'app-ng-template-2',
  template: `
    <!-- example of ngTemplateOutlet     -->
    <h3>ng-template using ngTemplateOutlet</h3>
    <ng-template #temp2>
      this content is rendered from ng-template using ngTemplateOutlet.....
    </ng-template>
    <div [ngTemplateOutlet]="temp2"></div>

    <br />
    <hr />

    <h3>ng-template using ngTemplateOutlet & ngTemplateOutletContext passing dynamic data into the template</h3>

    <ng-template #temp3 let-someMsg="message">
      <h4>{{ someMsg }}</h4>
    </ng-template>
    <div
      [ngTemplateOutlet]="temp3"
      [ngTemplateOutletContext]="{ message: 'My data from the  ngTemplateOutletContext' }"
    ></div>

    <div [ngTemplateOutlet]="temp3" [ngTemplateOutletContext]="secondMessage"></div>

    <div [ngTemplateOutlet]="temp3" [ngTemplateOutletContext]="thirdMessage"></div>
  `
})
export class NgTemplate2Component {
  secondMessage = { message: 'second message to the template' };
  thirdMessage = { message: 'another message' };

  constructor() {}
}
//#endregion
