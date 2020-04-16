import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDirectiveExamplesComponent } from './basic-directive-examples.component';

describe('BasicDirectiveExamplesComponent', () => {
  let component: BasicDirectiveExamplesComponent;
  let fixture: ComponentFixture<BasicDirectiveExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BasicDirectiveExamplesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDirectiveExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
