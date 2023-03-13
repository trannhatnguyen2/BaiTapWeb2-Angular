import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai36RandomDogImagesApiComponent } from './bai36-random-dog-images-api.component';

describe('Bai36RandomDogImagesApiComponent', () => {
  let component: Bai36RandomDogImagesApiComponent;
  let fixture: ComponentFixture<Bai36RandomDogImagesApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai36RandomDogImagesApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai36RandomDogImagesApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
