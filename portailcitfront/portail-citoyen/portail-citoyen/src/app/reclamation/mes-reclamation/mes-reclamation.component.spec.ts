import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesReclamationComponent } from './mes-reclamation.component';

describe('MesReclamationComponent', () => {
  let component: MesReclamationComponent;
  let fixture: ComponentFixture<MesReclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesReclamationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
