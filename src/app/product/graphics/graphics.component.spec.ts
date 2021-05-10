import { DebugElement, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { productSpecsService } from '../../mocks/services.mock';
import { GetProductSpecsService } from '../../services/get-product-specs.service';

import { GraphicsComponent } from './graphics.component';

describe('GraphicsComponent', () => {
  let component: GraphicsComponent;
  let fixture: ComponentFixture<GraphicsComponent>;
  let de: DebugElement;
  let radioInput: ElementRef;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [GraphicsComponent],
      providers: [
        { provide: GetProductSpecsService, useValue: productSpecsService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsComponent);
    component = fixture.componentInstance;
    component.product = productSpecsService.getProductDetails()[0];
    fixture.detectChanges();
    de = fixture.debugElement;
    radioInput = de.query(By.css('#graphicsRadioDefault1'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on select input', () => {
    it('should emit when the radio input is selected', () => {
      spyOn(component.graphicsEvent, 'emit');
      radioInput.nativeElement.click();
      expect(component.graphicsEvent.emit).toHaveBeenCalled();
    });
  });
});
