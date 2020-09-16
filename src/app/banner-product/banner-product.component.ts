import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-banner-product',
  templateUrl: './banner-product.component.html',
  styleUrls: ['./banner-product.component.css']
})
export class BannerProductComponent implements OnInit {
  elementPATH_IMAGE = [
    "../../assets/IMAGE/monitor/samsung.png",//SINISTRA
    "../../assets/IMAGE/monitor/acer.png",//PODIO
    "../../assets/IMAGE/monitor/lg.png"//DESTRO
  ];
  sequence = [0,1,2];

  step = -1;
  elementCLASS = document.getElementsByName("banner-image");//---> CLASSE CHE PASSO AL SERVICE

  constructor() {

  }

  ngOnInit() {
    this.tempo()

  }

  tempo() {
    setInterval(() => {
      this.step++;
      if(this.step == 0){
        this.sequence = [1,2,0];
        this.elementCLASS[0].style.animation = "tilt-in-left 3s 1";
        this.elementCLASS[1].style.animation = "tilt-in-right 3s 1";
        this.elementCLASS[2].style.animation = "text-focus-in 3s 1";
      }
      if(this.step == 1){
        this.sequence = [2,0,1];
        this.elementCLASS[0].style.animation = "text-focus-in 3s 1";
        this.elementCLASS[1].style.animation = "tilt-in-left 3s 1";
        this.elementCLASS[2].style.animation = "tilt-in-right 3s 1";
      }
      if(this.step == 2){
        this.sequence = [0,1,2];
        this.elementCLASS[0].style.animation = "tilt-in-right 3s 1";
        this.elementCLASS[1].style.animation = "text-focus-in 3s 1";
        this.elementCLASS[2].style.animation = "tilt-in-left 3s 1";
        this.step=-1;
      }
    }, 10000)
  }
}
