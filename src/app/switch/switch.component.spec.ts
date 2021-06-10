import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SwitchComponent } from './switch.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('SwitchComponent', () => {
  let component: SwitchComponent;
  let fixture: ComponentFixture<SwitchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /////////////////////////////
  // COMPONENT CLASS TESTING //
  /////////////////////////////

  it('#changeSwitch() should toggle #isOn', () => {
    expect(component.isOn).toBe(false, 'off at first');
    component.changeSwitch();
    expect(component.isOn).toBe(true, 'on after click');
    component.changeSwitch();
    expect(component.isOn).toBe(false, 'off after second click');
  });

  it('#isOn = true should get #message to "ON"', () => {
    component.isOn = true;
    expect(component.message).toMatch('ON');
  });

  it('#isOn = false should get #message to "OFF"', () => {
    component.isOn = false;
    expect(component.message).toEqual('OFF');
  });

  ///////////////////////////
  // COMPONENT DOM TESTING //
  ///////////////////////////

  it('should contain message "OFF"', () => {
    const message = fixture.debugElement.query(By.css('#switch__span-message'));
    const el = message.nativeElement;
    expect(el.innerHTML).toContain('OFF');
  });

  it('message should contain "ON" when clicked (button.click)', () => {
    const message = fixture.debugElement.query(By.css('#switch__span-message'));
    const button = fixture.debugElement.query(By.css('#switch__button-change'));
    button.triggerEventHandler('click', null);

    fixture.detectChanges();

    const el = message.nativeElement;
    expect(el.innerHTML).toContain('ON');
  });
});
