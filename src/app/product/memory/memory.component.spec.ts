import { DebugElement, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { productSpecsService } from 'src/app/mocks/services.mock';
import { GetProductSpecsService } from 'src/app/services/get-product-specs.service';

import { MemoryComponent } from './memory.component';

describe('MemoryComponent', () => {
  let component: MemoryComponent;
  let fixture: ComponentFixture<MemoryComponent>;
  let mockProductService;
  let de: DebugElement;
  let radioInput: ElementRef;

  beforeEach(async () => {
    mockProductService = jasmine.createSpyObj(['getMemoryDetails']);
    mockProductService.getMemoryDetails.and.returnValue(productSpecsService.getMemoryDetails());

    await TestBed.configureTestingModule({
      declarations: [MemoryComponent],
      providers: [
        { provide: GetProductSpecsService, useValue: mockProductService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryComponent);
    component = fixture.componentInstance;
    component.product = productSpecsService.getProductDetails()[0];
    fixture.detectChanges();
    de = fixture.debugElement;
    radioInput = de.query(By.css('#memoryRadioDefault1'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on select input', () => {
    it('should emit when the radio input is selected', () => {
      spyOn(component.memoryEvent, 'emit');
      radioInput.nativeElement.click();
      expect(component.memoryEvent.emit).toHaveBeenCalled();
    });
  });
});
