import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai13JsonArrayProductEventComponent } from './bai13-json-array-product-event.component';

describe('Bai13JsonArrayProductEventComponent', () => {
  let component: Bai13JsonArrayProductEventComponent;
  let fixture: ComponentFixture<Bai13JsonArrayProductEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai13JsonArrayProductEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai13JsonArrayProductEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
