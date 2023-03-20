import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai59MongodbApiCreateAFashionComponent } from './bai59-mongodb-api-create-a-fashion.component';

describe('Bai59MongodbApiCreateAFashionComponent', () => {
  let component: Bai59MongodbApiCreateAFashionComponent;
  let fixture: ComponentFixture<Bai59MongodbApiCreateAFashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai59MongodbApiCreateAFashionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai59MongodbApiCreateAFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
