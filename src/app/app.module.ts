import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { TemplateRegistry } from '@backbase/foundation-ang/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ...environment.mockProviders, 
    TemplateRegistry,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
