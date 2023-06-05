import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as FileSaver from 'file-saver';
import { lastValueFrom } from 'rxjs';
import { HouseholdService } from 'src/app/services/household.service';

@Component({
  selector: 'app-mens-height-teamwise',
  templateUrl: './mens-height-teamwise.component.html',
  styleUrls: ['./mens-height-teamwise.component.scss']
})
export class MensHeightTeamwiseComponent implements OnInit {
  constructor(private householdService: HouseholdService,
    private route:ActivatedRoute,
    ) {}

datalist: any[]=[];
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
    { field: 'team', header: 'Team', customExportHeader: 'Datalist Code' },
    {
      field: 'measured',
      header: 'Measured [Result of height measurement]',
  },
  {
      field: 'menNotPresent',
      header: 'Men not present [Result of height measurement]',
  },
  {
      field: 'menRefused',
      header: 'Men Refused [Result of height measurement]',
  },
  {
      field: 'other',
      header: 'Other [Result of height measurement]',
  },
  {
      field: 'missing',
      header: 'Missing [Result of Height Measurement]',
  },

  {
    field: 'total',
    header: 'Total ',
},
{
  field: 'numberOfMen',
  header: 'Number of Men 15-54 ',
},
{
field: 'menHtOutOfRange',
header: 'Among Women Measured Height Out of Range (%) ',
},
{
field: 'menWithValidHtData',
header: 'Men with Valid Height Data (%) ',
},
  
  ];
this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));

this.stateId=this.route.snapshot.paramMap.get('stateId');
this.stateName=this.route.snapshot.paramMap.get('stateName');
console.log(this.stateId);
console.log(this.stateName);

this.getdata();
}


async getdata(){
  this.datalist = await lastValueFrom(this.householdService.getAllMensHeightTeamwise(this.stateId));
}

exportPdf() {
  import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then((x) => {
          const doc = new jsPDF.default('l', 'px', 'a3');
          (doc as any).autoTable(this.exportColumns, this.datalist);
          doc.save('Mens-Height-teamwise.pdf');
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

saveAsExcelFile(buffer: any, fileName: string): void {
  let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  let EXCEL_EXTENSION = '.xlsx';
  const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
  });
  FileSaver.saveAs(data, fileName + '_Mens-Height-teamwise_' + new Date().getTime() + EXCEL_EXTENSION);
}
}


