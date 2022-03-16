import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarSettingsComponent } from './car-settings.component';

describe('TeamSettingsComponent', () => {
  let component: CarSettingsComponent;
  let fixture: ComponentFixture<CarSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
