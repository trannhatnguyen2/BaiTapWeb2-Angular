import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai31ExternalApiProductService2Component } from './bai31-external-api-product-service2.component';

describe('Bai31ExternalApiProductService2Component', () => {
  let component: Bai31ExternalApiProductService2Component;
  let fixture: ComponentFixture<Bai31ExternalApiProductService2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai31ExternalApiProductService2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai31ExternalApiProductService2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
