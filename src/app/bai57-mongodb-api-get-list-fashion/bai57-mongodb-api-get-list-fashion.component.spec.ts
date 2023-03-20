import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai57MongodbApiGetListFashionComponent } from './bai57-mongodb-api-get-list-fashion.component';

describe('Bai57MongodbApiGetListFashionComponent', () => {
  let component: Bai57MongodbApiGetListFashionComponent;
  let fixture: ComponentFixture<Bai57MongodbApiGetListFashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai57MongodbApiGetListFashionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai57MongodbApiGetListFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
