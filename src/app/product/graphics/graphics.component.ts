import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductType } from '../../interfaces/product.type';
import { GraphicsType } from '../../interfaces/graphics.type';
import { GetProductSpecsService } from '../../services/get-product-specs.service';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html'
})
export class GraphicsComponent implements OnInit {
  @Input() product: ProductType = <ProductType>{};
  @Output() graphicsEvent = new EventEmitter<GraphicsType>();
  graphicsDetails: GraphicsType[] = [];

  constructor(private getProductSpecsService: GetProductSpecsService) { }

  ngOnInit(): void {
    this.graphicsDetails = this.getProductSpecsService.getGraphicDetails();
  }

  selectItem(item: GraphicsType) {
    this.graphicsEvent.emit(item);
  }

}
