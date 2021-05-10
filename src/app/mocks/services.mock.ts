import { GraphicsType } from "../interfaces/graphics.type";
import { MemoryType } from "../interfaces/memory.type";
import { ProcessorType } from "../interfaces/processor.type";
import { ProductType } from "../interfaces/product.type";
import { StorageType } from "../interfaces/storage.type";

export const productSpecsService = {
  getProductDetails(): ProductType[] {
    return [
      {
        "id": 0,
        "name": "Customise your 16‑inch MacBook Pro - Space Grey",
        "image": "../../assets/macbook_pro.jpg",
        "processor": {
          "id": 0,
          "processorDetails": "2.3GHz 8-core 9th-generation Intel Core i9 processor, Turbo Boost up to 4.8GHz",
          "price": 0
        },
        "memory": {
          "id": 0,
          "memoryDetails": "16GB 2666MHz DDR4 memory",
          "price": 0
        },
        "graphics": {
          "id": 0,
          "graphicsDetails": "AMD Radeon Pro 5500M with 4GB of GDDR6 memory",
          "price": 0
        },
        "storage": {
          "id": 0,
          "storageDetails": "1TB SSD storage",
          "price": 0
        },
        "ratina": "16-inch Retina display with True Tone",
        "touchBar": "Touch Bar and Touch ID",
        "keyboard": "Backlit Magic Keyboard - US English",
        "basePrice": 239900,
        "finalPrice": 239900
      }
    ];
  },

  getProcessorsDetails(): ProcessorType[] {
    return [
      {
        "id": 0,
        "processorDetails": "2.3GHz 8-core 9th-generation Intel Core i9 processor, Turbo Boost up to 4.8GHz",
        "price": 0
      },
      {
        "id": 1,
        "processorDetails": "2.4GHz 8-core 9th-generation Intel Core i9 processor, Turbo Boost up to 5.0GHz",
        "price": 20000
      }
    ];
  },

  getMemoryDetails(): MemoryType[] {
    return [
      {
        "id": 0,
        "memoryDetails": "16GB 2666MHz DDR4 memory",
        "price": 0
      },
      {
        "id": 1,
        "memoryDetails": "32GB 2666MHz DDR4 memory",
        "price": 40000
      },
      {
        "id": 2,
        "memoryDetails": "64GB 2666MHz DDR4 memory",
        "price": 80000
      }
    ];
  },

  getGraphicDetails(): GraphicsType[] {
    return [
      {
        "id": 0,
        "graphicsDetails": "AMD Radeon Pro 5500M with 4GB of GDDR6 memory",
        "price": 0
      },
      {
        "id": 1,
        "graphicsDetails": "AMD Radeon Pro 5500M with 8GB of GDDR6 memory",
        "price": 10000
      },
      {
        "id": 2,
        "graphicsDetails": "AMD Radeon Pro 5600M with 8GB of HBM2 memory",
        "price": 70000
      }
    ];
  },

  getStorageDetails(): StorageType[] {
    return [{
      "id": 0,
      "storageDetails": "1TB SSD storage",
      "price": 0
    },
    {
      "id": 1,
      "storageDetails": "2TB SSD storage",
      "price": 40000
    },
    {
      "id": 2,
      "storageDetails": "4TB SSD storage",
      "price": 100000
    },
    {
      "id": 3,
      "storageDetails": "8TB SSD storage",
      "price": 220000
    }];
  }
};