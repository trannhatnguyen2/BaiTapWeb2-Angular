import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai29ExternalApiNganhangdongaComponent } from './bai29-external-api-nganhangdonga.component';

describe('Bai29ExternalApiNganhangdongaComponent', () => {
  let component: Bai29ExternalApiNganhangdongaComponent;
  let fixture: ComponentFixture<Bai29ExternalApiNganhangdongaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai29ExternalApiNganhangdongaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai29ExternalApiNganhangdongaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
