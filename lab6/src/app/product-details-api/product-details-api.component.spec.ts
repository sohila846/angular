import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsApiComponent } from './product-details-api.component';

describe('ProductDetailsApiComponent', () => {
  let component: ProductDetailsApiComponent;
  let fixture: ComponentFixture<ProductDetailsApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
