import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithNavigationComponent } from './with-navigation.component';

describe('WithNavigationComponent', () => {
  let component: WithNavigationComponent;
  let fixture: ComponentFixture<WithNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
