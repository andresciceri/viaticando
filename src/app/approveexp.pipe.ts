import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'approveexp'
})
export class ApproveexpPipe implements PipeTransform {

  transform(value: boolean, args?: any): any {
    if(value){
    	return "Aprobado";
    }else if(value === null){
    	return "Por Aprobar";
    }else {
    	return "No Aprobado";
    }    
  }

}
