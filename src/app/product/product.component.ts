import { Component, OnInit } from '@angular/core';
import { GraphicsType } from '../interfaces/graphics.type';
import { MemoryType } from '../interfaces/memory.type';
import { ProcessorType } from '../interfaces/processor.type';
import { ProductType } from '../interfaces/product.type';
import { StorageType } from '../interfaces/storage.type';
import { GetProductSpecsService } from '../services/get-product-specs.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: ProductType = <ProductType>{};
  totalEmi: number = 0;
  simpleInterest: number = 0;
  interestRate: number = 13; // % per anum
  tenure: number = 12; // in months
  constructor(private getProductSpecsService: GetProductSpecsService) { }

  ngOnInit(): void {
    if (this.getProductSpecsService.getProductDetails().length > 0) {
      this.product = this.getProductSpecsService.getProductDetails()[0];
      this.calculateEmi();
    }
  }

  onProcessorSelection(processor: ProcessorType): void {
    this.product.processor = processor;
    this.calculateFinalPrice();
  }

  onMemorySelection(memory: MemoryType): void {
    this.product.memory = memory;
    this.calculateFinalPrice();
  }

  onGraphicsSelection(graphics: GraphicsType): void {
    this.product.graphics = graphics;
    this.calculateFinalPrice();
  }

  onStorageSelection(storage: StorageType): void {
    this.product.storage = storage;
    this.calculateFinalPrice();
  }

  calculateFinalPrice(): void {
    this.product.finalPrice = this.product.processor.price + this.product.memory.price + this.product.graphics.price + this.product.storage.price + this.product.basePrice;
    this.calculateEmi();
  }

  calculateEmi(): void {
    this.simpleInterest = (this.product.finalPrice * this.interestRate * this.tenure) / (100 * 12);
    this.totalEmi = (this.simpleInterest + this.product.finalPrice) / 12;
  }
}
