import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectosdashboardComponent } from './projectosdashboard.component';

describe('ProjectosdashboardComponent', () => {
  let component: ProjectosdashboardComponent;
  let fixture: ComponentFixture<ProjectosdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectosdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectosdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
