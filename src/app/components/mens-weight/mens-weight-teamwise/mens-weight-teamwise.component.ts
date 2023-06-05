import { Component } from '@angular/core';
import * as FileSaver from 'file-saver';
import { HouseholdService } from 'src/app/services/household.service';
import { lastValueFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mens-weight-teamwise',
  templateUrl: './mens-weight-teamwise.component.html',
  styleUrls: ['./mens-weight-teamwise.component.scss']
})
export class MensWeightTeamwiseComponent 
{
  constructor(private householdService: HouseholdService,private route:ActivatedRoute) {}
                               
  datalist: any[] =[];           
  title = 'datatables';            
  dtOptions: any = {};           
  
  // for csv download
  cols: any[]=[];                
  selectedDatalist: any[]=[];    
  exportColumns :any[]=[];  
  stateId!: string | null ;
stateName!: string | null ;                         
  ngOnInit() {  
    // for csv download               
    this.cols = [                
      { field: 'team', header: 'team', customExportHeader: 'Datalist Code' },
      { field: 'measured', header: 'measured' },
      { field: 'childNotPresent', header: 'childNotPresent' },
      { field: 'refused', header: 'refused' },
      { field: 'other', header: 'other' },
      { field: 'missing', header: 'missing' },
      { field: 'total', header: 'total' },
      { field: 'numberOfMen', header: 'numberOfMen' },
      { field: 'amongMenMeasuredWeightOutOfRange', header: 'amongMenMeasuredWeightOutOfRange' },
      { field: 'menWithValidWeightData', header: 'menWithValidWeightData' },
   
    ];
  this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
this.stateId=this.route.snapshot.paramMap.get('stateId');
this.stateName=this.route.snapshot.paramMap.get('stateName');
console.log(this.stateId);
console.log(this.stateName);
this.getdata();

  }

  async getdata(){
     this.datalist = await lastValueFrom(this.householdService.getAllMensWeightTeamwise(this.stateId));
  }
                       
exportPdf() {
    import('jspdf').then((jsPDF) => {
        import('jspdf-autotable').then((x) => {
            const doc = new jsPDF.default('l', 'px', 'a3');
            (doc as any).autoTable(this.exportColumns, this.datalist);
            doc.save('childrens-weight-teamwise.pdf');
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
    FileSaver.saveAs(data, fileName + '_childrens-weight-teamwise_' + new Date().getTime() + EXCEL_EXTENSION);
 }


}
