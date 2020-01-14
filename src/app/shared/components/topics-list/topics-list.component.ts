import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss']
})
export class TopicsListComponent implements OnInit {
  // topics: { name: string; description: string; link: string; }[];
  @Input() topics;

  constructor() {}

  ngOnInit() {}
}
