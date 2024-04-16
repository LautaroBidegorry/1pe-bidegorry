import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatNames'
})
export class ConcatNamesPipe implements PipeTransform {

  transform(nombre: string, apellido: string): string {
    return nombre + ' ' + apellido; 
  }

}