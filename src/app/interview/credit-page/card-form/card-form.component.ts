import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CardService } from 'src/app/shared/services/card.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit, OnDestroy {

  public dataForm !: FormGroup;
  public observables = new Subscription();

  constructor(private fb: FormBuilder, private cardService: CardService) { }



  ngOnDestroy(): void {
    this.observables.unsubscribe();
  }

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      name: ['', [Validators.required]],
      cardNumber: ['', [Validators.required]],
      expiration: ['', [Validators.required]],
      cvv: ['', [Validators.required]]
    });

    this.listenData();
  }

  public onSubmit():void{
    if(this.dataForm.invalid){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Verify your data!',

      })

    }
    else{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'successful payment',
        showConfirmButton: false,
        timer: 1500
      })
    }

  }
  public cancel():void{
    this.dataForm.reset();
  }

  public listenData(): void {
    this.observables.add(
      this.dataForm.get('cardNumber')?.valueChanges.subscribe((number) => {
        this.cardService.emitCardNumber(number);
      })
    );
    this.observables.add(
      this.dataForm.get('name')?.valueChanges.subscribe((name) => {
        this.cardService.emitCardName(name);

      })
    );
  }
}
