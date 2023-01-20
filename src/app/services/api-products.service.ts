import { Injectable } from '@angular/core';
import {Producto,ProductoResponse} from './../models/product';
import {HttpClient} from '@angular/common/http';
import {ApiAuthService} from './api-auth.service'
import { catchError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  public URL_PRODUCTS : string = 'https://dummyjson.com/auth/products'
  public listaProducts : ProductoResponse | null = null;

  constructor(
    private cliente : HttpClient,
    private serviAuth :ApiAuthService,
    private router : Router
  ) { }

  public obtenerProds(){
    this.cliente.get<ProductoResponse>(this.URL_PRODUCTS,{
      headers : {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.serviAuth.datosUsuario?.token
      }
    }).subscribe((datosInternet)=>{
      this.listaProducts = datosInternet;
    })
  }
}
