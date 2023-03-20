import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai60MongodbApiUpdateAFashionComponent } from './bai60-mongodb-api-update-a-fashion.component';

describe('Bai60MongodbApiUpdateAFashionComponent', () => {
  let component: Bai60MongodbApiUpdateAFashionComponent;
  let fixture: ComponentFixture<Bai60MongodbApiUpdateAFashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai60MongodbApiUpdateAFashionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai60MongodbApiUpdateAFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
