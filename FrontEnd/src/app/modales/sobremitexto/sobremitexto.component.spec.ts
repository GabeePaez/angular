import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobremitextoComponent } from './sobremitexto.component';

describe('SobremitextoComponent', () => {
  let component: SobremitextoComponent;
  let fixture: ComponentFixture<SobremitextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobremitextoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobremitextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
