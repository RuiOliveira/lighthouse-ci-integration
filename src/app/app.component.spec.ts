import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
