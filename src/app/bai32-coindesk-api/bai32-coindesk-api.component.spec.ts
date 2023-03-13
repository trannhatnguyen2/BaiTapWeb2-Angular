import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai32CoindeskApiComponent } from './bai32-coindesk-api.component';

describe('Bai32CoindeskApiComponent', () => {
  let component: Bai32CoindeskApiComponent;
  let fixture: ComponentFixture<Bai32CoindeskApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai32CoindeskApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai32CoindeskApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
