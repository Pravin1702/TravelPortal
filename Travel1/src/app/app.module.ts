import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './Service/user.service';
import { MenuComponent } from './menu/menu.component';
import { RequestComponent } from './request/request.component';
import { RequestService } from './Service/request.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    RequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService,RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
