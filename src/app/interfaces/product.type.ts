import { GraphicsType } from "./graphics.type";
import { MemoryType } from "./memory.type";
import { ProcessorType } from "./processor.type";
import { StorageType } from "./storage.type";

export interface ProductType {
    id: number;
    name: string;
    image: string;
    processor: ProcessorType;
    memory: MemoryType;
    graphics: GraphicsType;
    storage: StorageType;
    ratina?: string,
    touchBar?: string,
    keyboard?: string,
    basePrice: number;
    finalPrice: number;
}