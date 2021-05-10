import { TestBed } from '@angular/core/testing';
import { GetProductSpecsService } from './get-product-specs.service';
import processorsData from '../../assets/processor-mock-data.json';
import { ProcessorType } from '../interfaces/processor.type';
import { productSpecsService } from '../mocks/services.mock';

describe('GetProductSpecsService', () => {
  let service: GetProductSpecsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProductSpecsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the product details', () => {
    service['selectedProductDetails'] = productSpecsService.getProductDetails();
    const user = service.getProductDetails();
    expect(user[0].id).toEqual(0);
    expect(user[0].name).toEqual('Customise your 16‑inch MacBook Pro - Space Grey');
  });

  it('should get the processor details', () => {
    service['processsors'] = productSpecsService.getProcessorsDetails();
    const user = service.getProcessorsDetails();
    expect(user[0].id).toEqual(0);
    expect(user[0].processorDetails).toEqual('2.3GHz 8-core 9th-generation Intel Core i9 processor, Turbo Boost up to 4.8GHz');
  });

  it('should get the memory details', () => {
    service['memories'] = productSpecsService.getMemoryDetails();
    const user = service.getMemoryDetails();
    expect(user[0].id).toEqual(0);
    expect(user[0].memoryDetails).toEqual('16GB 2666MHz DDR4 memory');
  });

  it('should get the graphics details', () => {
    service['graphics'] = productSpecsService.getGraphicDetails();
    const user = service.getGraphicDetails();
    expect(user[0].id).toEqual(0);
    expect(user[0].graphicsDetails).toEqual('AMD Radeon Pro 5500M with 4GB of GDDR6 memory');
  });

  it('should get the storage details', () => {
    service['storage'] = productSpecsService.getStorageDetails();
    const user = service.getStorageDetails();
    expect(user[0].id).toEqual(0);
    expect(user[0].storageDetails).toEqual('1TB SSD storage');
  });
});
