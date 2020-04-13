import { Directive, OnInit, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[tooltip]',
  exportAs: 'tooltip' // allow us to use it alongside TemplateRef in our component
})
export class TooltipDirective implements OnInit {
  tooltipElement = document.createElement('div');
  visible = false;

  @Input()
  set tooltip(value) {
    this.tooltipElement.textContent = value;
  }

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.tooltipElement.className = 'tooltip';
    this.element.nativeElement.appendChild(this.tooltipElement);
    this.element.nativeElement.classList.add('tooltip-container');
  }

  show() {
    this.tooltipElement.classList.add('tooltip-active');
  }

  hide() {
    this.tooltipElement.classList.remove('tooltip-active');
  }
}
