import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as FileSaver from 'file-saver';
import { lastValueFrom } from 'rxjs';
import { HouseholdService } from 'src/app/services/household.service';

@Component({
  selector: 'app-hh-relations-module-teamwise',
  templateUrl: './hh-relations-module-teamwise.component.html',
  styleUrls: ['./hh-relations-module-teamwise.component.scss']
})
export class HhRelationsModuleTeamwiseComponent implements OnInit {
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
      { field: 'ttNoOfWomenEligibleForDomesticViolence', header: 'total No. Of Women Eligible For Domestic Violence and Interviewed' },
      { field: 'eligibleWomenNotInterviewedBecauseOfPrivacyNotObtained', header: 'percentage of eligible Women Not Interviewed Because Of Privacy Not Obtained' }
    
  ];
this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));

this.stateId=this.route.snapshot.paramMap.get('stateId');
this.stateName=this.route.snapshot.paramMap.get('stateName');
console.log(this.stateId);
console.log(this.stateName);

this.getdata();
}


async getdata(){
  this.datalist = await lastValueFrom(this.householdService.getAllHouseholdRelationsModulesTeamwise(this.stateId));
}

exportPdf() {
  import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then((x) => {
          const doc = new jsPDF.default('l', 'px', 'a3');
          (doc as any).autoTable(this.exportColumns, this.datalist);
          doc.save('Household-Relations-Modules-teamwise.pdf');
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
  FileSaver.saveAs(data, fileName + '_Household-Relations-Modules-teamwise_' + new Date().getTime() + EXCEL_EXTENSION);
}
}
