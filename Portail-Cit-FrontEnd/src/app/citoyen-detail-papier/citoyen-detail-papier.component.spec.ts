import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitoyenDetailPapierComponent } from './citoyen-detail-papier.component';

describe('CitoyenDetailPapierComponent', () => {
  let component: CitoyenDetailPapierComponent;
  let fixture: ComponentFixture<CitoyenDetailPapierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitoyenDetailPapierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitoyenDetailPapierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
