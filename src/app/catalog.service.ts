import { Injectable } from '@angular/core';
import { Catalog } from '../app/catalog';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private catalog;

  constructor() {
    this.catalog= new Catalog();
  }
  getTipologiaProdotti(){
    return this.catalog.getTipologiaProdotti();
  }

  getMonitor(){
    return this.catalog.getMonitor();
  }
}
