import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProcessorComponent } from './product/processor/processor.component';
import { MemoryComponent } from './product/memory/memory.component';
import { GraphicsComponent } from './product/graphics/graphics.component';
import { StorageComponent } from './product/storage/storage.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProcessorComponent,
    MemoryComponent,
    GraphicsComponent,
    StorageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
