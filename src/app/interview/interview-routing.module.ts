import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditPageComponent } from './credit-page/credit-page.component';

const routes: Routes = [
  
  {
    path: '', 
    component: CreditPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewRoutingModule { }
