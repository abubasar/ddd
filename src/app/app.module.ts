import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DevExtremeModule} from 'devextreme-angular';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Service } from './app.service';
import { CkeditorComponent } from './ckeditor/ckeditor.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DeptListComponent } from './dept-list/dept-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CkeditorComponent,
    DeptListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CKEditorModule,
    DevExtremeModule
  ],
  providers: [
    Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
