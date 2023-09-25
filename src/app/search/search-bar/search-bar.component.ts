import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  busqueda : string ='';
  @Output() resultado = new EventEmitter<string>()

  onSearch(){
    console.log(this.busqueda);
    this.resultado.emit(this.busqueda)

    

  }

}
