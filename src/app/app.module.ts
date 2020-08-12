import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { FormComponent } from './form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { CommonService } from './common.service';

@NgModule({
  declarations: [AppComponent, NavBarComponent, FormComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule,MatButtonModule,MatInputModule],
//  service filenamema enga []ithukula kudukura
  providers: [CommonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
