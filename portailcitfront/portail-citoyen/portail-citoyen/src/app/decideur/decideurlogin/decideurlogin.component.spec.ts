import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecideurloginComponent } from './decideurlogin.component';

describe('DecideurloginComponent', () => {
  let component: DecideurloginComponent;
  let fixture: ComponentFixture<DecideurloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecideurloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecideurloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
