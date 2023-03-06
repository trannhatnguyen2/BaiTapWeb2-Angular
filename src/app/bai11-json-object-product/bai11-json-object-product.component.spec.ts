import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai11JsonObjectProductComponent } from './bai11-json-object-product.component';

describe('Bai11JsonObjectProductComponent', () => {
  let component: Bai11JsonObjectProductComponent;
  let fixture: ComponentFixture<Bai11JsonObjectProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai11JsonObjectProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai11JsonObjectProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
