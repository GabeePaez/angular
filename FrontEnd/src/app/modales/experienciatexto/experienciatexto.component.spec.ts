import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciatextoComponent } from './experienciatexto.component';

describe('ExperienciatextoComponent', () => {
  let component: ExperienciatextoComponent;
  let fixture: ComponentFixture<ExperienciatextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciatextoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciatextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
