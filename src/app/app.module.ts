import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OrganizerComponent } from './components/organizer/organizer.component';
import { WithHeaderHocComponent } from './components/with-header-hoc/with-header-hoc.component';
import { ListComponent } from './components/list/list.component';
import { CompletedComponent } from './components/completed/completed.component';
import { EmptyPlaceholderComponent } from './components/empty-placeholder/empty-placeholder.component';
import { ItemComponent } from './components/list/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    WithHeaderHocComponent,
    OrganizerComponent,
    ListComponent,
    CompletedComponent,
    EmptyPlaceholderComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
