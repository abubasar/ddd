import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CkeditorComponent } from './ckeditor/ckeditor.component';
import { DeptListComponent } from './dept-list/dept-list.component';

const routes: Routes = [
  {path:'editor',component:CkeditorComponent},
  {path:'list',component:DeptListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
