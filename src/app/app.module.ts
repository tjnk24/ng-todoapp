import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrganizerComponent } from './components/organizer/organizer.component';
import { WithHeaderHocComponent } from './components/with-header-hoc/with-header-hoc.component';
import { ListComponent } from './components/list/list.component';
import { CompletedComponent } from './components/completed/completed.component';

@NgModule({
  declarations: [
    AppComponent,
    WithHeaderHocComponent,
    OrganizerComponent,
    ListComponent,
    CompletedComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
