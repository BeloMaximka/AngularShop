import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardBasicComponent } from './product-card-basic.component';

describe('ProductCardBasicComponent', () => {
  let component: ProductCardBasicComponent;
  let fixture: ComponentFixture<ProductCardBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
