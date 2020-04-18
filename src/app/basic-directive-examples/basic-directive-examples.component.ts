import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-directive-examples',
  templateUrl: './basic-directive-examples.component.html',
  styleUrls: ['./basic-directive-examples.component.scss']
})
export class BasicDirectiveExamplesComponent implements OnInit {
  messages = {
    one: 'message one',
    two: 'message two',
    third: 'message third'
  };
  constructor() {}

  ngOnInit() {}
}
