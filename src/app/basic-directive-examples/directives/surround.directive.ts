import {
  Injectable,
  AfterViewInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ChangeDetectorRef,
  AfterContentChecked,
  AfterViewChecked
} from '@angular/core';

@Injectable()
export class TemplateService {
  templates = new Map<string, TemplateRef<any>>();
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-template-storage',
  template: `
    <ng-template #header><span>I am a header</span></ng-template>
    <ng-template #footer><span>I am a footer</span></ng-template>
  `
})
export class TemplateStorageComponent implements AfterViewInit {
  // just set all the template to a service as a key val

  @ViewChild('header', { static: true }) headerTemplate;
  @ViewChild('footer', { static: true }) footerTemplate;

  constructor(private templateService: TemplateService) {}
  ngAfterViewInit(): void {
    this.templateService.templates.set('header', this.headerTemplate);
    this.templateService.templates.set('footer', this.footerTemplate);
  }
}

import { Directive } from '@angular/core';

@Directive({ selector: '[surround]' })
export class SurroundDirective implements AfterViewInit, AfterViewChecked {
  constructor(
    private templateService: TemplateService,
    private template: TemplateRef<any>,
    private view: ViewContainerRef,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewChecked() {}

  ngAfterViewInit(): void {
    this.view.createEmbeddedView(this.templateService.templates.get('header'));
    this.view.createEmbeddedView(this.template);
    this.view.createEmbeddedView(this.templateService.templates.get('footer'));

    this.cdr.detectChanges();
  }
}
