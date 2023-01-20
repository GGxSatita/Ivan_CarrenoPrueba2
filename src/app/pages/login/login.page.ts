import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiAuthService } from './../../services/api-auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public formularioLog : FormGroup

  constructor(
    private builder : FormBuilder,
    private authServi : ApiAuthService
  ) {
    this.formularioLog = builder.group({
      username : ['', [Validators.required]],
      password : ['',[Validators.required]]
    })
   }

  public validar(){
    const formularioValidos = this.formularioLog.valid;
    if(!formularioValidos){
      return
    }
    this.authServi.autorizacion({
      username : this.formularioLog.value.username,
      password : this.formularioLog.value.password
    })
  }


  ngOnInit() {
  }

}
