import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai34PredictTheGenderComponent } from './bai34-predict-the-gender.component';

describe('Bai34PredictTheGenderComponent', () => {
  let component: Bai34PredictTheGenderComponent;
  let fixture: ComponentFixture<Bai34PredictTheGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai34PredictTheGenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai34PredictTheGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
