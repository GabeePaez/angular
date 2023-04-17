import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobremidashboardComponent } from './sobremidashboard.component';

describe('SobremidashboardComponent', () => {
  let component: SobremidashboardComponent;
  let fixture: ComponentFixture<SobremidashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobremidashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobremidashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
