import { Injectable, HostBinding } from '@angular/core';

@Injectable()
export class LoggingService {
  logs = [];
  log(trackingEvent) {
    this.logs.push(trackingEvent);
    console.log(this.logs);
  }
}

@Injectable()
export class OnlineService {
  online = true;
  constructor() {
    setInterval(() => {
      this.online = Math.random() > 0.5;
    }, 2000);
  }
}

import { Directive, HostListener, Input } from '@angular/core';

@Directive({ selector: '[track], [online]', providers: [LoggingService, OnlineService] })
export class TrackingDirective {
  @Input() track;
  @HostListener('click', ['$event'])
  onClick($event) {
    console.log('clicked', $event);
    console.log(this.track);
    this.loggingService.log({ event: 'click', value: this.track });
  }

  // example for online directive
  // whenever the online service changes its val ... disabled attr will be applied and btn will be disabled
  @HostBinding('disabled')
  get disabled() {
    return !this.onlineService.online;
  }

  // offline class will be applied based on service val
  @HostBinding('class.offline')
  get offline() {
    return !this.onlineService.online;
  }
  constructor(private loggingService: LoggingService, private onlineService: OnlineService) {}
}
