import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value:string,ver:boolean = true): any {

let salida:string = "";
    if(ver){

      for (let i = 0; i < value.length; i++) {
      salida = salida + "*";


  }

  return salida;
}
    else{return value;}


  }

}
