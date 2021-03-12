import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecitoyenComponent } from './updatecitoyen.component';

describe('UpdatecitoyenComponent', () => {
  let component: UpdatecitoyenComponent;
  let fixture: ComponentFixture<UpdatecitoyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecitoyenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecitoyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
