import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KhachhangListComponent} from './khachhang/khachhang-list/khachhang-list.component';
import {KhachhangCreateComponent} from './khachhang/khachhang-create/khachhang-create.component';
import {KhachhangEditComponent} from './khachhang/khachhang-edit/khachhang-edit.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'khachhang-list'},
  {path: 'khachhang-list', component: KhachhangListComponent},
  {path: 'khachhang-create', component: KhachhangCreateComponent},
  {path: 'khachhang-edit', component: KhachhangEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
