import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  busque:string=''

  capture(busqued:any){
    this.busque=busqued
    console.log(this.busque);
    

  }

}
