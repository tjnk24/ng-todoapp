import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrganizerComponent } from './components/organizer/organizer.component';
import { WithHeaderHocComponent } from './components/with-header-hoc/with-header-hoc.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganizerComponent,
    WithHeaderHocComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
