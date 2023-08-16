import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() title: string;
  @Output() login: EventEmitter<any> = new EventEmitter()
  loginForm: FormGroup
  
  ngOnInit() {
    // throw new Error('Method not implemented.');
    this.createForm();
  }

  createForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  onSave() {
    this.login.emit(this.loginForm.value)
  }

}
