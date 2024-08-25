import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeName',
  standalone: true
})
export class ChangeNamePipe implements PipeTransform {

  transform(value: string): string {
    return  'Mr. '+ value;
  }

}
