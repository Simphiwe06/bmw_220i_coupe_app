import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bwm220iCoupeComponent } from './bwm220i-coupe.component';

describe('Bwm220iCoupeComponent', () => {
  let component: Bwm220iCoupeComponent;
  let fixture: ComponentFixture<Bwm220iCoupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bwm220iCoupeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bwm220iCoupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
