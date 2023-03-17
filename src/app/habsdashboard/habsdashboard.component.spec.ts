import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabsdashboardComponent } from './habsdashboard.component';

describe('HabsdashboardComponent', () => {
  let component: HabsdashboardComponent;
  let fixture: ComponentFixture<HabsdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabsdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
