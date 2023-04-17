import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectostextoComponent } from './proyectostexto.component';

describe('ProyectostextoComponent', () => {
  let component: ProyectostextoComponent;
  let fixture: ComponentFixture<ProyectostextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectostextoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectostextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
