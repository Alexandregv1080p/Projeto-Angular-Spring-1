import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './authenticate/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RegisterComponent } from './authenticate/register/register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestInterceptor } from './request.interceptor';
import { TableTaskComponent } from './widgets/table-task/table-task.component';
import { MatTableModule } from '@angular/material/table';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartPie2Component } from './widgets/chart-pie2/chart-pie2.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTableModule,
    NgxChartsModule
    
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass: RequestInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
