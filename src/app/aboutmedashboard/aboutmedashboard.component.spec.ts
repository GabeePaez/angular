import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmedashboardComponent } from './aboutmedashboard.component';

describe('AboutmedashboardComponent', () => {
  let component: AboutmedashboardComponent;
  let fixture: ComponentFixture<AboutmedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutmedashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutmedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
