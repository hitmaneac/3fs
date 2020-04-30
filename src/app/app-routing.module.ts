import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BucketListComponent } from './components/bucket-list/bucket-list.component';
import { ObjectListComponent } from './components/object-list/object-list.component';
import { BucketDetailsComponent } from './components/bucket-details/bucket-details.component';

const routes: Routes = [
  { path: 'bucket-list', component: BucketListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }