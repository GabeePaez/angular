import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosbannerComponent } from './fotosbanner.component';

describe('FotosbannerComponent', () => {
  let component: FotosbannerComponent;
  let fixture: ComponentFixture<FotosbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotosbannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotosbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
