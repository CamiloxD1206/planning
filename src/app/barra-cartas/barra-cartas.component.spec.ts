import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraCartasComponent } from './barra-cartas.component';

describe('BarraCartasComponent', () => {
  let component: BarraCartasComponent;
  let fixture: ComponentFixture<BarraCartasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarraCartasComponent]
    });
    fixture = TestBed.createComponent(BarraCartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
