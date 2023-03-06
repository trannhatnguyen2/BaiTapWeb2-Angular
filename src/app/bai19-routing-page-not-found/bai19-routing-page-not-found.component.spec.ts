import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai19RoutingPageNotFoundComponent } from './bai19-routing-page-not-found.component';

describe('Bai19RoutingPageNotFoundComponent', () => {
  let component: Bai19RoutingPageNotFoundComponent;
  let fixture: ComponentFixture<Bai19RoutingPageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai19RoutingPageNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai19RoutingPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
