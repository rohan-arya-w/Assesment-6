import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManageComponent } from './manage/manage.component';
import { DaysComponent } from './days/days.component';

@NgModule({
  declarations: [AppComponent, EditorComponent, ManageComponent, DaysComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularEditorModule,
     FormsModule,
     NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
