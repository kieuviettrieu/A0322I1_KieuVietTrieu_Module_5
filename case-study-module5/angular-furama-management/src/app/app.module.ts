import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceComponent } from './service/service.component';
import { CreateKhachHangComponent } from './khachhang/khach-hang-create/create-khach-hang.component';
import { ListKhachHangComponent } from './khachhang/list-khach-hang/list-khach-hang.component';
import { EditKhachHangComponent } from './khachhang/edit-khach-hang/edit-khach-hang.component';
import { KhachhangCreateComponent } from './khachhang/khachhang-create/khachhang-create.component';
import { KhachhangListComponent } from './khachhang/khachhang-list/khachhang-list.component';
import { KhachhangEditComponent } from './khachhang/khachhang-edit/khachhang-edit.component';
import { KhachhangDeleteComponent } from './khachhang/khachhang-delete/khachhang-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServiceComponent,
    CreateKhachHangComponent,
    ListKhachHangComponent,
    EditKhachHangComponent,
    KhachhangCreateComponent,
    KhachhangListComponent,
    KhachhangEditComponent,
    KhachhangDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
