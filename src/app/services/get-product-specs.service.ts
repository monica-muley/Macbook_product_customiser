import { Injectable } from '@angular/core';
import { ProcessorType } from '../interfaces/processor.type';
import { MemoryType } from '../interfaces/memory.type';
import { GraphicsType } from '../interfaces/graphics.type';
import { StorageType } from '../interfaces/storage.type';
import { ProductType } from '../interfaces/product.type';
import processorsData from '../../assets/processor-mock-data.json';
import memoryData from '../../assets/memory-mock-data.json';
import graphicsData from '../../assets/graphics-mock-data.json';
import storageData from '../../assets/storage-mock-data.json';
import productDetails from '../../assets/product-mock-data.json';

@Injectable({
  providedIn: 'root'
})
export class GetProductSpecsService {
  processsors: ProcessorType[];
  memories: MemoryType[];
  graphics: GraphicsType[];
  storage: StorageType[];
  selectedProductDetails: ProductType[];
  constructor() {
    this.processsors = processorsData;
    this.memories = memoryData;
    this.graphics = graphicsData;
    this.storage = storageData;
    this.selectedProductDetails = productDetails;
  }

  getProductDetails(): ProductType[] {
    return this.selectedProductDetails;
  }

  getProcessorsDetails(): ProcessorType[] {
    return this.processsors;
  }

  getMemoryDetails(): MemoryType[] {
    return this.memories;
  }

  getGraphicDetails(): GraphicsType[] {
    return this.graphics;
  }

  getStorageDetails(): StorageType[] {
    return this.storage;
  }
}
