import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai30ExternalApiProductService1Component } from './bai30-external-api-product-service1.component';

describe('Bai30ExternalApiProductService1Component', () => {
  let component: Bai30ExternalApiProductService1Component;
  let fixture: ComponentFixture<Bai30ExternalApiProductService1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai30ExternalApiProductService1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai30ExternalApiProductService1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
