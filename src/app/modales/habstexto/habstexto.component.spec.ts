import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabstextoComponent } from './habstexto.component';

describe('HabstextoComponent', () => {
  let component: HabstextoComponent;
  let fixture: ComponentFixture<HabstextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabstextoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabstextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
