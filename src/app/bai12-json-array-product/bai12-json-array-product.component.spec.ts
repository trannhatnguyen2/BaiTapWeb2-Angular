import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai12JsonArrayProductComponent } from './bai12-json-array-product.component';

describe('Bai12JsonArrayProductComponent', () => {
  let component: Bai12JsonArrayProductComponent;
  let fixture: ComponentFixture<Bai12JsonArrayProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai12JsonArrayProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai12JsonArrayProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
