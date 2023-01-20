import { Component, OnInit } from '@angular/core';
import {ApiProductsService} from './../../services/api-products.service'

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  constructor(
    public servicio :ApiProductsService
  ) { }

  ngOnInit() {
  }

  public ionViewWillEnter(){
    this.servicio.obtenerProds()
  }

}
