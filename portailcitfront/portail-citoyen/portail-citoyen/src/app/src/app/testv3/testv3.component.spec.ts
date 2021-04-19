import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testv3Component } from './testv3.component';

describe('Testv3Component', () => {
  let component: Testv3Component;
  let fixture: ComponentFixture<Testv3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Testv3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Testv3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
