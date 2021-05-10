import { DebugElement, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { productSpecsService } from '../../mocks/services.mock';
import { GetProductSpecsService } from '../../services/get-product-specs.service';

import { StorageComponent } from './storage.component';

describe('StorageComponent', () => {
  let component: StorageComponent;
  let fixture: ComponentFixture<StorageComponent>;
  let mockProductService;
  let de: DebugElement;
  let radioInput: ElementRef;

  beforeEach(async () => {
    mockProductService = jasmine.createSpyObj(['getStorageDetails']);
    mockProductService.getStorageDetails.and.returnValue(productSpecsService.getStorageDetails());

    await TestBed.configureTestingModule({
      declarations: [StorageComponent],
      providers: [
        { provide: GetProductSpecsService, useValue: mockProductService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageComponent);
    component = fixture.componentInstance;
    component.product = productSpecsService.getProductDetails()[0];
    fixture.detectChanges();
    de = fixture.debugElement;
    radioInput = de.query(By.css('#storageRadioDefault1'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on select input', () => {
    it('should emit when the radio input is selected', () => {
      spyOn(component.storageEvent, 'emit');
      radioInput.nativeElement.click();
      expect(component.storageEvent.emit).toHaveBeenCalled();
    });
  });
});
