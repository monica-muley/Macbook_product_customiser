import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductType } from '../interfaces/product.type';
import { productSpecsService } from '../mocks/services.mock';
import { GetProductSpecsService } from '../services/get-product-specs.service';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent],
      providers: [
        { provide: GetProductSpecsService, useValue: productSpecsService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate final price on processor selection', () => {
    component.onProcessorSelection(productSpecsService.getProcessorsDetails()[1]);
    expect(component.product.finalPrice).toEqual(259900);
  });

  it('should calculate final price on memory selection', () => {
    component.onMemorySelection(productSpecsService.getMemoryDetails()[1]);
    expect(component.product.finalPrice).toEqual(279900);
  });

  it('should calculate final price on graphics selection', () => {
    component.onGraphicsSelection(productSpecsService.getGraphicDetails()[1]);
    expect(component.product.finalPrice).toEqual(249900);
  });

  it('should calculate final price on storage selection', () => {
    component.onStorageSelection(productSpecsService.getStorageDetails()[2]);
    expect(component.product.finalPrice).toEqual(339900);
  });

});
