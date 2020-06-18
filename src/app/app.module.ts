import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateSondageComponent } from './create-sondage/create-sondage.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ListeSondagesComponent } from './liste-sondages/liste-sondages.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    CreateSondageComponent,
    ListeSondagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    CKEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
