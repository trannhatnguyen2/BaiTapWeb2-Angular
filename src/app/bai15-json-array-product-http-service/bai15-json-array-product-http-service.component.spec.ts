import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai15JsonArrayProductHttpServiceComponent } from './bai15-json-array-product-http-service.component';

describe('Bai15JsonArrayProductHttpServiceComponent', () => {
  let component: Bai15JsonArrayProductHttpServiceComponent;
  let fixture: ComponentFixture<Bai15JsonArrayProductHttpServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai15JsonArrayProductHttpServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai15JsonArrayProductHttpServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
