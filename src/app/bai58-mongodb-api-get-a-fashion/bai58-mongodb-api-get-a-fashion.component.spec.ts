import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai58MongodbApiGetAFashionComponent } from './bai58-mongodb-api-get-a-fashion.component';

describe('Bai58MongodbApiGetAFashionComponent', () => {
  let component: Bai58MongodbApiGetAFashionComponent;
  let fixture: ComponentFixture<Bai58MongodbApiGetAFashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai58MongodbApiGetAFashionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai58MongodbApiGetAFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
