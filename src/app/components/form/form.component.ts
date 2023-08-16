import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  // contactForm = new FormGroup({})

  // contactForm = new FormGroup({})

  ngOnInit() {
    // throw new Error('Method not implemented.');
    
  }

  contactForm = new FormGroup({
    firstname: new FormControl({value: 'Guest', disabled: true}, [Validators.required,Validators.minLength(2)]), //set default value to 'Agung'
    lastname: new FormControl({value: 'Guest', disabled: true}, [Validators.required,Validators.minLength(2)]),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl()
  })

  onSubmit() {
    console.log(this.contactForm.value);
    
  }
}
