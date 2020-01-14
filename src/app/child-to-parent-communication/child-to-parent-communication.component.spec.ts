import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildToParentCommunicationComponent } from './child-to-parent-communication.component';

describe('ChildToParentCommunicationComponent', () => {
  let component: ChildToParentCommunicationComponent;
  let fixture: ComponentFixture<ChildToParentCommunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChildToParentCommunicationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildToParentCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
