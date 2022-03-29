import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: 'raizQuadrada'
})
export class RaizQuadrada implements PipeTransform {
  transform(numero: number): number {
    return Math.sqrt(numero)
  }
}
