import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductType } from '../../interfaces/product.type';
import { StorageType } from '../../interfaces/storage.type';
import { GetProductSpecsService } from '../../services/get-product-specs.service';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html'
})
export class StorageComponent implements OnInit {  
  @Input() product: ProductType = <ProductType>{};
  @Output() storageEvent = new EventEmitter<StorageType>();
  storageDetails: StorageType[] = [];

  constructor(private getProductSpecsService: GetProductSpecsService) { }

  ngOnInit(): void {
    this.storageDetails = this.getProductSpecsService.getStorageDetails();
  }

  selectItem(item: StorageType) {
    this.storageEvent.emit(item);
  }

}
