import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { findEl } from '../spec-helpers/element.spec-helper';

import { MainNavigationComponent } from './main-navigation.component';

describe('MainNavigationComponent', () => {
  let component: MainNavigationComponent;
  let fixture: ComponentFixture<MainNavigationComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavigationComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the bottom sheet link', () => {
    const testId = 'bottom-sheet-link-container'
    const bottomSheetLink = findEl(fixture, testId);
    console.log(bottomSheetLink);
  })
});
