import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { HouseholdService } from 'src/app/services/household.service';
import {lastValueFrom} from 'rxjs'

@Component({
  selector: 'app-eligible-woman-response-rate',
  templateUrl: './eligible-woman-response-rate.component.html',
  styleUrls: ['./eligible-woman-response-rate.component.scss']
})
export class EligibleWomanResponseRateComponent implements OnInit{
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
        { field: 'completed', header: 'Number of Completed Households (Result of individual interview )' },
        { field: 'notAtHome', header: 'Number of women not at home (Result of individual interview )' },
        { field: 'postponed', header: 'Number of women postponed (Result of individual interview )' },
        { field: 'refused', header: 'Number of women refused (Result of individual interview )' },
        { field: 'partlyCompleted', header: 'Number of women partly completed (Result of individual interview )' },
        { field: 'incapacited', header: 'Number of women incapacited(Result of individual interview )' },
        { field: 'other', header: 'others (Result of individual interview )' },
        { field: 'percentVal', header: 'percentage ' },
        { field: 'numberVal', header: 'number ' }
      
      ];
    this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
     this.getdata();
    }
  
    async getdata(){
       this.datalist = await lastValueFrom(this.householdService.getAllEligibleWomenResponseRate());
    }
                         
  
  
  exportPdf() {
      import('jspdf').then((jsPDF) => {
          import('jspdf-autotable').then((x) => {
              const doc = new jsPDF.default('l', 'px', 'a3');
              (doc as any).autoTable(this.exportColumns, this.datalist);
              doc.save('ELIGIBLE-WOMAN-RESOPNSE-RATE.pdf');
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
      FileSaver.saveAs(data, fileName + '_ELIGIBLE-WOMAN-RESOPNSE-RATE_' + new Date().getTime() + EXCEL_EXTENSION);
   }
  
  
}
