import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { AuthResponse, Auth } from '../models/auth';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {

  public URL_AUTH : string = 'https://dummyjson.com/auth/login'
  public datosUsuario : AuthResponse | null = null;

  constructor(
    private cliente : HttpClient,
    private router : Router
  ) { }

  public autorizacion({username, password}:Auth){
    this.cliente.post<AuthResponse>(this.URL_AUTH,{
      username,
      password
    },{
      headers : {
        'Content-Type' : 'application/json'
      }
    }).subscribe((datosInternet)=>{
      this.datosUsuario = datosInternet;
      if(datosInternet){
        this.router.navigate(['/perfil'])
      }
    })

  }

}
