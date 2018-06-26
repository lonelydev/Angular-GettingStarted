import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    /** The order of imports is crucial.
     * The wild card routes should be registered after all the other routes.
     * Thus approutingmodule should be registered last.
     */
    AppRoutingModule
  ],
  /**
   * Code that can create or return a service
   * Typically the service clas itself
   * Must be injectable
   * Available from where it is declared to all its children
   */
  bootstrap: [ AppComponent ]
})
export class AppModule { }
