import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { AddItemComponent } from "./layout/add-item.component";
import { ItemComponent } from "./layout/item.component";
import { AppComponent } from "./app.component";
import { LayoutComponent } from "./layout/layout.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    AddItemComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
