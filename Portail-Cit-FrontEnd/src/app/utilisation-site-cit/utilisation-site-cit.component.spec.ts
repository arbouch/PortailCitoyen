import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisationSiteCitComponent } from './utilisation-site-cit.component';

describe('UtilisationSiteCitComponent', () => {
  let component: UtilisationSiteCitComponent;
  let fixture: ComponentFixture<UtilisationSiteCitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisationSiteCitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisationSiteCitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
