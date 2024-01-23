import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToggleButtonGroupComponent } from './toggle-button-group/toggle-button-group.component';

@NgModule({
  declarations: [AppComponent, ToggleButtonGroupComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
