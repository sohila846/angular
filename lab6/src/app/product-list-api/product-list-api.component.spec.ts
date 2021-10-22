import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListApiComponent } from './product-list-api.component';

describe('ProductListApiComponent', () => {
  let component: ProductListApiComponent;
  let fixture: ComponentFixture<ProductListApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
