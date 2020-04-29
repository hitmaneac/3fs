import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BucketListComponent } from './components/bucket-list/bucket-list.component';
import { BucketCreateComponent } from './components/bucket-create/bucket-create.component';
import { BucketDetailsComponent } from './components/bucket-details/bucket-details.component';
import { ObjectListComponent } from './components/object-list/object-list.component';
import { ModalBucketDeleteComponent } from './components/modals/modal-bucket-delete/modal-bucket-delete.component';
import { ModalObjectDeleteComponent } from './components/modals/modal-object-delete/modal-object-delete.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BucketListComponent,
    BucketCreateComponent,
    BucketDetailsComponent,
    ObjectListComponent,
    ModalBucketDeleteComponent,
    ModalObjectDeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
