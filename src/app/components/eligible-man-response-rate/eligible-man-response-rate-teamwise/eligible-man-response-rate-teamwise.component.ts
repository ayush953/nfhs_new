import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as FileSaver from 'file-saver';
import { lastValueFrom } from 'rxjs';
import { HouseholdService } from 'src/app/services/household.service';

@Component({
  selector: 'app-eligible-man-response-rate-teamwise',
  templateUrl: './eligible-man-response-rate-teamwise.component.html',
  styleUrls: ['./eligible-man-response-rate-teamwise.component.scss']
})
export class EligibleManResponseRateTeamwiseComponent implements OnInit {
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
  console.log("called state init");
  this.cols = [                
    { field: 'team', header: 'team', customExportHeader: 'Datalist Code' },
    { field: 'completed', header: 'Number of Completed Households (Result of individual interview )' },
    { field: 'notAtHome', header: 'Number of men not at home (Result of individual interview )' },
    { field: 'postponed', header: 'Number of men postponed (Result of individual interview )' },
    { field: 'refused', header: 'Number of men refused (Result of individual interview )' },
    { field: 'partlyCompleted', header: 'Number of men partly completed (Result of individual interview )' },
    { field: 'incapacited', header: 'Number of men incapacited(Result of individual interview )' },
    { field: 'other', header: 'others (Result of individual interview )' },
    { field: 'percentVal', header: 'percentage ' },
    { field: 'numberVal', header: 'number ' }
  
  ];
this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));

this.stateId=this.route.snapshot.paramMap.get('stateId');
this.stateName=this.route.snapshot.paramMap.get('stateName');
console.log(this.stateId);
console.log(this.stateName);

this.getdata();
}


async getdata(){
  this.datalist = await lastValueFrom(this.householdService.getAllEligibleMenResponseRateTeamwise(this.stateId));
}

exportPdf() {
  import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then((x) => {
          const doc = new jsPDF.default('l', 'px', 'a3');
          (doc as any).autoTable(this.exportColumns, this.datalist);
          doc.save('Eligible-man-response-rate-teamwise.pdf');
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
  FileSaver.saveAs(data, fileName + '_Eligible-man-response-rate-teamwise_' + new Date().getTime() + EXCEL_EXTENSION);
}
}
