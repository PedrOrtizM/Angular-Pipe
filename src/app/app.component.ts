import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


   nombre:string = "Pedro Ortiz";
   nombre2:string = "PeDRo OrTiz";
   activar:boolean = true;
   arreglo = [1,2,3,4,5,6,7,8,9,10];
   PI = Math.PI;
   numero:number = 0.234;
   heroe = {
     nombre: "Pedro",
     clave: "pedro123",
     edad: 30,
     direccion: {
       calle: "Primera",
       barrio:"Amberes"
     }

   };

   video = "w_hdJU-tK8o";
}
