import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosdashboardComponent } from './estudiosdashboard.component';

describe('EstudiosdashboardComponent', () => {
  let component: EstudiosdashboardComponent;
  let fixture: ComponentFixture<EstudiosdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiosdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudiosdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
