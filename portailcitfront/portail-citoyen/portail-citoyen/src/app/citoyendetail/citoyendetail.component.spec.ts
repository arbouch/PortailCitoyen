import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitoyendetailComponent } from './citoyendetail.component';

describe('CitoyendetailComponent', () => {
  let component: CitoyendetailComponent;
  let fixture: ComponentFixture<CitoyendetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitoyendetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitoyendetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
