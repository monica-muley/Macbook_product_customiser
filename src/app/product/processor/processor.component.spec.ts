import { DebugElement, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { productSpecsService } from '../../mocks/services.mock';
import { GetProductSpecsService } from '../../services/get-product-specs.service';
import { ProcessorComponent } from './processor.component';

describe('ProcessorComponent', () => {
  let component: ProcessorComponent;
  let fixture: ComponentFixture<ProcessorComponent>;
  let mockProductService;
  let de: DebugElement;
  let radioInput: ElementRef;

  beforeEach(async () => {
    mockProductService = jasmine.createSpyObj(['getProcessorsDetails']);
    mockProductService.getProcessorsDetails.and.returnValue(productSpecsService.getProcessorsDetails());
    await TestBed.configureTestingModule({
      declarations: [ProcessorComponent],
      providers: [
        { provide: GetProductSpecsService, useValue: mockProductService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessorComponent);
    component = fixture.componentInstance;
    component.product = productSpecsService.getProductDetails()[0];
    fixture.detectChanges();
    de = fixture.debugElement;
    radioInput = de.query(By.css('#processorRadioDefault1'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on select input', () => {
    it('should emit when the radio input is selected', () => {
      spyOn(component.processorEvent, 'emit');
      radioInput.nativeElement.click();
      expect(component.processorEvent.emit).toHaveBeenCalled();
    });
  });
});
