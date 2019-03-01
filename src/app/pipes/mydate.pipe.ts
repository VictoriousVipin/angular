import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mydate'
})
export class MydatePipe implements PipeTransform {

  transform(d: any, args?: any): any {
    return ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
    d.getFullYear();
  }

}


@Pipe({
  name: 'squareroot'
})
export class SquarerootPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Math.sqrt(value);
  }

}


@Pipe({
  name: 'powerof'
})
export class PowerofPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Math.pow(value, args);
  }

}
