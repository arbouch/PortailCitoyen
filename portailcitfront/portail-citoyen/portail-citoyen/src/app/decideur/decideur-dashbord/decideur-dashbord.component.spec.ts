import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecideurDashbordComponent } from './decideur-dashbord.component';

describe('DecideurDashbordComponent', () => {
  let component: DecideurDashbordComponent;
  let fixture: ComponentFixture<DecideurDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecideurDashbordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecideurDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
