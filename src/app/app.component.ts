import { Component, HostListener } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adviceGenerator-APP';
  header;
  advice;
  imageSrc: any;
  outerWidth: number;
  constructor(private api:ApiService){}

  ngOnInit() {
    this.outerWidth = window.outerWidth;
    console.log(this.outerWidth)
    if(this.outerWidth <=590){
      this.imageSrc = "../assets/images/pattern-divider-mobile.svg"
    }
    else {
      this.imageSrc = "../assets/images/pattern-divider-desktop.svg"

    }
    this.api.getAdvice().subscribe(res =>{
      console.log(res)
      this.header =res["slip"]["id"]
      this.advice=res["slip"]["advice"]
    })
  }


}


