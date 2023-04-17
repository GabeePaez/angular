import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiostextoComponent } from './estudiostexto.component';

describe('EstudiostextoComponent', () => {
  let component: EstudiostextoComponent;
  let fixture: ComponentFixture<EstudiostextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiostextoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudiostextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
