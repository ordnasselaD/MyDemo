import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  linkProdotti;
  itemMonitor;
  constructor(private catalogo: CatalogService) {
  }

  ngOnInit(): void {
    this.linkProdotti = this.catalogo.getTipologiaProdotti();
    this.itemMonitor = this.catalogo.getMonitor();
    console.log(this.linkProdotti)
  }

}
