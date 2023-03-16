import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { MovementsListComponent } from './components/movements-list/movements-list.component';
import { DepositFundComponent } from './components/deposit-fund/deposit-fund.component';
import { RemoveFundComponent } from './components/remove-fund/remove-fund.component';

import { LoginComponent } from './components/login/login.component';
import { ApiserviceService } from './apiservice.service';

// HTTP

import { HttpClientModule } from '@angular/common/http';

// Angular Material

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

// React Forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

// Angular Input Mask

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MovementsListComponent,
    RemoveFundComponent,

    LoginComponent,
    DepositFundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
  ],
  providers: [ApiserviceService, CurrencyPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
