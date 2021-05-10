import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductType } from 'src/app/interfaces/product.type';
import { ProcessorType } from '../../interfaces/processor.type';
import { GetProductSpecsService } from '../../services/get-product-specs.service';

@Component({
  selector: 'app-processor',
  templateUrl: './processor.component.html'
})
export class ProcessorComponent implements OnInit {
  @Input() product: ProductType = <ProductType>{};
  @Output() processorEvent = new EventEmitter<ProcessorType>();
  processorDetails: ProcessorType[] = [];
  constructor(private getProductSpecsService: GetProductSpecsService) { }

  ngOnInit(): void {
    this.processorDetails = this.getProductSpecsService.getProcessorsDetails();
  }

  selectItem(item: ProcessorType) {
    this.processorEvent.emit(item);
  }

}
