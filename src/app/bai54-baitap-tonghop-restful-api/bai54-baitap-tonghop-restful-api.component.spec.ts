import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai54BaitapTonghopRestfulApiComponent } from './bai54-baitap-tonghop-restful-api.component';

describe('Bai54BaitapTonghopRestfulApiComponent', () => {
  let component: Bai54BaitapTonghopRestfulApiComponent;
  let fixture: ComponentFixture<Bai54BaitapTonghopRestfulApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai54BaitapTonghopRestfulApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai54BaitapTonghopRestfulApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
