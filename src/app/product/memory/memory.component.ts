import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductType } from '../../interfaces/product.type';
import { MemoryType } from '../../interfaces/memory.type';
import { GetProductSpecsService } from '../../services/get-product-specs.service';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html'
})
export class MemoryComponent implements OnInit {
  @Input() product: ProductType = <ProductType>{};
  @Output() memoryEvent = new EventEmitter<MemoryType>();
  memoryDetails: MemoryType[] = [];
  constructor(private getProductSpecsService: GetProductSpecsService) { }

  ngOnInit(): void {
    this.memoryDetails = this.getProductSpecsService.getMemoryDetails();
  }

  selectItem(item:MemoryType) {
    this.memoryEvent.emit(item);
  }

}
