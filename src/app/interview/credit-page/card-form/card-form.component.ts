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
  public validMonths = ['01','02','03','04','05','06','07','08','09','10','11','12'];
  public actualDate : Date = new Date();

  constructor(private fb: FormBuilder, private cardService: CardService) { }



  ngOnDestroy(): void {
    this.observables.unsubscribe();
  }

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      cardNumber: ['', [Validators.required]],
      expiration: ['', [Validators.required]],
      cvv: ['', [Validators.required]]
    });

    this.listenData();
  }

  public onSubmit():void{
    if(this.dataForm.invalid){
      if(this.dataForm.get('name')?.errors){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'The name field must contain at least three letters.',
  
        })
        
      }
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Verify that your information is complete!',

      })

    }
    else{

      const {expiration} = this.dataForm.value;
      const partsExpiration = expiration.split('/');
      const actualYear = this.actualDate.getFullYear().toString().slice(-2);
    
      if((this.validMonths.includes(partsExpiration[0])) &&( partsExpiration[1] >= actualYear )){
        Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'successful payment',
        showConfirmButton: false,
        timer: 1500
      })
        

      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Verify your expiration date',
  
        })


      }



      
    }

  }
  public cancel():void{
    this.dataForm.reset();
  }

  public listenData(): void {
    this.observables.add(
      this.dataForm.get('cardNumber')?.valueChanges.subscribe((number) => {
        let cardVal: string = this.dataForm.get('cardNumber')?.value;
      
        if(cardVal.length <= 19){
          this.cardService.emitCardNumber(number);
        }
        
      })
    );
    this.observables.add(
      this.dataForm.get('name')?.valueChanges.subscribe((name) => {
        this.cardService.emitCardName(name);

      })
    );
  }
}
