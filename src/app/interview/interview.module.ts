import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewRoutingModule } from './interview-routing.module';
import { CreditPageComponent } from './credit-page/credit-page.component';
import { CardComponent } from './credit-page/card/card.component';
import { CardFormComponent } from './credit-page/card-form/card-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomDirectivesModule } from '../shared/modules';


@NgModule({
  declarations: [
    CreditPageComponent,
    CardComponent,
    CardFormComponent
  ],
  imports: [
    CommonModule,
    InterviewRoutingModule,
    ReactiveFormsModule,
    CustomDirectivesModule
  ]
})
export class InterviewModule { }
