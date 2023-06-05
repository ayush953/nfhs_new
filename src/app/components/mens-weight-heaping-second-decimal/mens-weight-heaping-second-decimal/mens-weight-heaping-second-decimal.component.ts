import { Component } from '@angular/core';

import * as FileSaver from 'file-saver';
import { HouseholdService } from 'src/app/services/household.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-mens-weight-heaping-second-decimal',
  templateUrl: './mens-weight-heaping-second-decimal.component.html',
  styleUrls: ['./mens-weight-heaping-second-decimal.component.scss']
})
export class MensWeightHeapingSecondDecimalComponent {
  constructor(private householdService: HouseholdService) {}
                               
  datalist: any[] =[];           
  title = 'datatables';            
  dtOptions: any = {};           
  
  // for csv download
  cols: any[]=[];                
  selectedDatalist: any[]=[];    
  exportColumns :any[]=[];                           
  ngOnInit() {  
    // for csv download               
    this.cols = [                
      { field: 'state', header: 'State', customExportHeader: 'Datalist Code' },
      { field: 'c_0', header: 'c_0' },
      { field: 'c_1', header: 'c_1' },
      { field: 'c_2', header: 'c_2' },
      { field: 'c_3', header: 'c_3' },
      { field: 'c_4', header: 'c_4' },
      { field: 'c_5', header: 'c_5' },
      { field: 'c_6', header: 'c_6' },
      { field: 'c_7', header: 'c_7' },
      { field: 'c_8', header: 'c_9' },
      { field: 'c_9', header: 'c_9' },
      { field: 'totalInPercent', header: 'totalInPercent' },
      { field: 'percentWithSecondDecimal_0_or_5', header: 'percentWithSecondDecimal_0_or_5' },
      { field: 'numberOfMen', header: 'numberOfMen' },

   
    ];
  this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
   this.getdata();
  }

  async getdata(){
     this.datalist = await lastValueFrom(this.householdService.getAllMensWeightHeapingSecondDecimal());
  }
                       


exportPdf() {
    import('jspdf').then((jsPDF) => {
        import('jspdf-autotable').then((x) => {
            const doc = new jsPDF.default('l', 'px', 'a3');
            (doc as any).autoTable(this.exportColumns, this.datalist);
            doc.save('childrens-weight-heaping-first-decimal.pdf');
        });
    });
}

exportExcel() {
    import('xlsx').then((xlsx) => {
        const worksheet = xlsx.utils.json_to_sheet(this.datalist);
        const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, 'datalist');
    });
}

saveAsExcelFile(buffer: any, fileName: string): void 
{
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], 
    {

        type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_childrens-weight-heaping-first-decimal_' + new Date().getTime() + EXCEL_EXTENSION);
 }


}
