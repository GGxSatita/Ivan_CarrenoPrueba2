import { Component, OnInit } from '@angular/core';
import {ApiAuthService} from './../../services/api-auth.service';
import {Producto,ProductoResponse} from './../../models/product'
import { AuthResponse } from 'src/app/models/auth';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {


  constructor(
    private servicio : ApiAuthService
  ) { }

  ngOnInit() {
  }

  public datosUsuarioLogin(){
    this.servicio.datosUsuario?.firstName,
    this.servicio.datosUsuario?.lastName
  }

}
