import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai33GetListPublicApisComponent } from './bai33-get-list-public-apis.component';

describe('Bai33GetListPublicApisComponent', () => {
  let component: Bai33GetListPublicApisComponent;
  let fixture: ComponentFixture<Bai33GetListPublicApisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai33GetListPublicApisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai33GetListPublicApisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
