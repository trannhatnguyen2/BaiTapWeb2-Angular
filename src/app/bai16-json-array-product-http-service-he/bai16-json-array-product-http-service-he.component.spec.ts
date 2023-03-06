import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai16JsonArrayProductHttpServiceHEComponent } from './bai16-json-array-product-http-service-he.component';

describe('Bai16JsonArrayProductHttpServiceHEComponent', () => {
  let component: Bai16JsonArrayProductHttpServiceHEComponent;
  let fixture: ComponentFixture<Bai16JsonArrayProductHttpServiceHEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai16JsonArrayProductHttpServiceHEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai16JsonArrayProductHttpServiceHEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
