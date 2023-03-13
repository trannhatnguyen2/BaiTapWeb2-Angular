import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai35GetUsPublicApiComponent } from './bai35-get-us-public-api.component';

describe('Bai35GetUsPublicApiComponent', () => {
  let component: Bai35GetUsPublicApiComponent;
  let fixture: ComponentFixture<Bai35GetUsPublicApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai35GetUsPublicApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai35GetUsPublicApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
