import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSort'
})
export class FileSortPipe implements PipeTransform {

  transform(list: any[], sortField: string, isAsc: boolean): any {
    if (!list || !sortField || isAsc === undefined) {
      return list;
    }
    return list.sort(function (a, b) {
      let asc = isAsc ? 1 : -1;
      if (a[sortField] > b[sortField]) {
        return 1 * asc;
      } else if (a[sortField] === b[sortField]) {
        return 0;
      } else {
        return -1 * asc;
      }
    });
  }

}
