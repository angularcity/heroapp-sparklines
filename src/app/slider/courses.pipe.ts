import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseFil'
})
export class CoursesPipe implements PipeTransform {

  transform(value: any, minVal: number, maxVal: number): any {
    // if there is no filter, then show everything
    if (value.length === 0  ) {
      return value;
    }
    const resultArr = [];
    for ( const item of value){
      if (item['cost'] >= minVal && item['cost'] <= maxVal ) {
        resultArr.push(item);
      }
    }
    return resultArr;

  }

}
