import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileFilter'
})
export class FileFilterPipe implements PipeTransform {

  transform(files: any[], field: string, keyword: string): any {
    if (!field || !keyword) {
      return files;
    }
    return files.filter(file => {
    
      const itemFieldValue = file[field].toLowerCase();
      return itemFieldValue.indexOf(keyword.toLowerCase()) > -1;
    });
  }

}
