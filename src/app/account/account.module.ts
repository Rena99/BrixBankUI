import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewAccountComponent} from '../new-account/new-account.component'
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    NewAccountComponent
  ],
  imports: [
    RouterModule.forChild([
      {path:'newaccount', component: NewAccountComponent},
    ]),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AccountModule { }
