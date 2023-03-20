import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai61MongodbApiRemoveAFashionComponent } from './bai61-mongodb-api-remove-a-fashion.component';

describe('Bai61MongodbApiRemoveAFashionComponent', () => {
  let component: Bai61MongodbApiRemoveAFashionComponent;
  let fixture: ComponentFixture<Bai61MongodbApiRemoveAFashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai61MongodbApiRemoveAFashionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai61MongodbApiRemoveAFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
