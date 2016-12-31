/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListLampadaComponent } from './list-lampada.component';

describe('ListLampadaComponent', () => {
  let component: ListLampadaComponent;
  let fixture: ComponentFixture<ListLampadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLampadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLampadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
