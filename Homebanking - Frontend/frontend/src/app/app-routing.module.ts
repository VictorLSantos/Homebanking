import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovementsListComponent } from './components/movements-list/movements-list.component';
import { DepositFundComponent } from './components/deposit-fund/deposit-fund.component';
import { LoginComponent } from './components/login/login.component';
import { RemoveFundComponent } from './components/remove-fund/remove-fund.component';
import { GuardGuard } from '../app/guard.guard';

const routes: Routes = [
  {
    path: '',
    component: MovementsListComponent,
    canActivate: [GuardGuard],
  },
  {
    path: 'movement_list',
    component: MovementsListComponent,
    canActivate: [GuardGuard],
  },
  { path: 'deposit_fund', component: DepositFundComponent },
  { path: 'remove_fund', component: RemoveFundComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
