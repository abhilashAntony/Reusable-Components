import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { BottomSheetComponent } from './bottom-sheet.component';

describe('BottomSheetComponent', () => {
  let component: BottomSheetComponent;
  let fixture: ComponentFixture<BottomSheetComponent>;
  // let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [ BottomSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('initiates values', () => {
    const pageState = component.pageState;
    expect(pageState).toEqual('closed');
  })

  it('closes the overlay', () => {
    const { debugElement } = fixture;
    const overlayComponent = debugElement.query(By.css('[data-testid="page-overlay"]'));

    overlayComponent.triggerEventHandler('click', null);

    console.log(overlayComponent);
  })
});
