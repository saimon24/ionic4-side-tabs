import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTabsPage } from './first-tabs.page';

describe('FirstTabsPage', () => {
  let component: FirstTabsPage;
  let fixture: ComponentFixture<FirstTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
