import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorairesDetailComponent } from './horaires-detail.component';

describe('HorairesDetailComponent', () => {
  let component: HorairesDetailComponent;
  let fixture: ComponentFixture<HorairesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorairesDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorairesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
