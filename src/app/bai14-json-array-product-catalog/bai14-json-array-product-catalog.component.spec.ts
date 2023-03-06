import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai14JsonArrayProductCatalogComponent } from './bai14-json-array-product-catalog.component';

describe('Bai14JsonArrayProductCatalogComponent', () => {
  let component: Bai14JsonArrayProductCatalogComponent;
  let fixture: ComponentFixture<Bai14JsonArrayProductCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai14JsonArrayProductCatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai14JsonArrayProductCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
