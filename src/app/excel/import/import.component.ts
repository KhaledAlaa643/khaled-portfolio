import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent {
ExcelData: any[] = [];
readExcel(event: any) {
    let file = event.target.files[0]
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file)
    fileReader.onload = e => {
      var workBook = XLSX.read(fileReader.result, { type: "binary" });
      var sheetName = workBook.SheetNames;
      this.ExcelData = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName[0]]);
      console.log(this.ExcelData);
      
    }
  }
getColumnKeys(): string[] {
  const keys = new Set<string>();
  for (const data of this.ExcelData) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        keys.add(key);
      }
    }
  }
  return Array.from(keys);
}
}
