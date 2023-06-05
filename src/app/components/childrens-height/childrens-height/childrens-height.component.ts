import { Component } from '@angular/core';
import * as FileSaver from 'file-saver';
import { lastValueFrom } from 'rxjs';
import { HouseholdService } from 'src/app/services/household.service';

@Component({
  selector: 'app-childrens-height',
  templateUrl: './childrens-height.component.html',
  styleUrls: ['./childrens-height.component.scss']
})
export class ChildrensHeightComponent 
{
  constructor(private householdService: HouseholdService) {}
                               
  datalist: any[] =[];           
  title = 'datatables';            
  dtOptions: any = {};    
  a:any; 
  value:any;
  total=0;      
  
  // for csv download
  cols: any[]=[];                
  selectedDatalist: any[]=[];    
  exportColumns :any[]=[];                           
  ngOnInit() {  
    // for csv download               
    this.cols = [                
      { field: 'state', header: 'State', customExportHeader: 'Datalist Code' },
      { field: 'measured', header: 'measured' },
      { field: 'childNotPresent', header: 'childNotPresent' },
      { field: 'refused', header: 'refused' },
      { field: 'other', header: 'other' },
      { field: 'missing', header: 'missing' },
      { field: 'total', header: 'total' },
      { field: 'numberOfChildren', header: 'numberOfChildren' },
      { field: 'heightOutOfRange', header: 'heightOutOfRange' },
      { field: 'dateOfBirthIncomplete', header: 'dateOfBirthIncomplete' },
      { field: 'childrenWithValidData', header: 'childrenWithValidData' },
      { field: 'heightForAgeZScoreOutOfRange', header: 'heightForAgeZScoreOutOfRange' },
   
    ];
  this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
   this.getdata();
  }

  async getdata(){
     this.datalist = await lastValueFrom(this.householdService.getAllChildrensHeight());
  }
   
 

exportPdf() {
    import('jspdf').then((jsPDF) => {
        import('jspdf-autotable').then((x) => {
            const doc = new jsPDF.default('l', 'px', 'a3');
            (doc as any).autoTable(this.exportColumns, this.datalist);
            doc.save('childrens-height.pdf');
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
    FileSaver.saveAs(data, fileName + '_childrens-height_' + new Date().getTime() + EXCEL_EXTENSION);
 }

 
}
