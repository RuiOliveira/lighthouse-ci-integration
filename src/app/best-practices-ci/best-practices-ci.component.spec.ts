import { ComponentFixture, TestBed, tick, fakeAsync, waitForAsync } from '@angular/core/testing';

import { BestPracticesCIComponent, KEY_LOCALSTORAGE } from './best-practices-ci.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BestPracticesCIModel } from '../shared/model/best-practices.model';
import { By } from '@angular/platform-browser';
import { MaterialModule } from '../material.module';

describe('BestPracticesCIComponent', () => {
  let component: BestPracticesCIComponent;
  let fixture: ComponentFixture<BestPracticesCIComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BestPracticesCIComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [MaterialModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    window.localStorage.clear();
    fixture = TestBed.createComponent(BestPracticesCIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /////////////////////////////
  // COMPONENT CLASS TESTING //
  /////////////////////////////
  it('#constructor() should set #checkList with the value of localStorage KEY_LOCALSTORAGE', () => {
    const checkListMock: Array<BestPracticesCIModel> = [
      {
        id: 1,
        name: 'Prueba 1',
        checked: false
      }, {
        id: 2,
        name: 'Prueba 2',
        checked: false
      }
    ];
    window.localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(checkListMock));

    const best = new BestPracticesCIComponent();
    expect(best.checkList).toEqual(checkListMock);
  });

  it('#onChangeCheck() should set localStorage KEY_LOCALSTORAGE with #checkList"', () => {
    component.checkList = [
      {
        id: 1,
        name: 'Prueba 1',
        checked: false
      }, {
        id: 2,
        name: 'Prueba 2',
        checked: false
      }
    ];
    component.onChangeCheck();

    const checkListStorage = JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE));
    expect(component.checkList).toEqual(checkListStorage);
  });

  it('#allChecked() should return false if not all checked"', () => {
    component.checkList = [
      {
        id: 1,
        name: 'Prueba 1',
        checked: false
      }, {
        id: 2,
        name: 'Prueba 2',
        checked: false
      }
    ];
    expect(component.allChecked()).toBeFalsy();

    component.checkList = [
      {
        id: 1,
        name: 'Prueba 1',
        checked: false
      }, {
        id: 2,
        name: 'Prueba 2',
        checked: true
      }
    ];
    expect(component.allChecked()).toBeFalsy();

    component.checkList = [
      {
        id: 1,
        name: 'Prueba 1',
        checked: true
      }, {
        id: 2,
        name: 'Prueba 2',
        checked: false
      }
    ];
    expect(component.allChecked()).toBeFalsy();
  });

  it('#allChecked() should return true if all checked"', () => {
    component.checkList = [
      {
        id: 1,
        name: 'Prueba 1',
        checked: true
      }, {
        id: 2,
        name: 'Prueba 2',
        checked: true
      }
    ];
    expect(component.allChecked()).toBeTruthy();
  });

  ///////////////////////////
  // COMPONENT DOM TESTING //
  ///////////////////////////
  it('should not be seen the "check_circle_outline" icon if any check checked', () => {
    component.checkList = [
      {
        id: 1,
        name: 'Prueba 1',
        checked: true
      }, {
        id: 2,
        name: 'Prueba 2',
        checked: false
      }
    ];

    fixture.detectChanges();

    const iconSectionElement = fixture.debugElement.query(By.css('#best-practices-ci__section-icon'));
    expect(iconSectionElement).toBeNull();
  });

  it('should see the "check_circle_outline" icon when all checks are checked', () => {
    component.checkList = [
      {
        id: 1,
        name: 'Prueba 1',
        checked: true
      }, {
        id: 2,
        name: 'Prueba 2',
        checked: true
      }
    ];

    fixture.detectChanges();

    const iconSectionElement = fixture.debugElement.query(By.css('#best-practices-ci__section-icon'));

    expect(iconSectionElement).toBeDefined();
  });

});
