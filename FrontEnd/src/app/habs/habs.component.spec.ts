import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabsComponent } from './habs.component';

describe('HabsComponent', () => {
  let component: HabsComponent;
  let fixture: ComponentFixture<HabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
