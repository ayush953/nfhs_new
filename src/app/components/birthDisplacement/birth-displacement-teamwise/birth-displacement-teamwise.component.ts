import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as FileSaver from 'file-saver';
import { lastValueFrom } from 'rxjs';
import { HouseholdService } from 'src/app/services/household.service';

@Component({
  selector: 'app-birth-displacement-teamwise',
  templateUrl: './birth-displacement-teamwise.component.html',
  styleUrls: ['./birth-displacement-teamwise.component.scss']
})
export class BirthDisplacementTeamwiseComponent implements OnInit {
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
    { field: 'team', header: 'Team', customExportHeader: 'Datalist Code' },
      { field: 'year_2014', header: '2014 (Year of birth)' },
      { field: 'year_2015', header: '2015 (Year of birth)' },
      { field: 'year_2016', header: '2016 (Year of birth)' },
      { field: 'year_2017', header: '2017 (Year of birth)' },
      { field: 'year_2018', header: '2018 (Year of birth)' },
      { field: 'year_2019', header: '2019 (Year of birth)' },
      { field: 'year_2020', header: '2020 (Year of birth)' },
      { field: 'year_2021', header: '2021 (Year of birth)' },
      { field: 'year_2022', header: '2022 (Year of birth)' },
      { field: 'year_2023', header: '2023 (Year of birth)' },
      { field: 'missing', header: 'Missing (Year of birth)' },
      { field: 'numberOfBirths', header: 'number Of Births ' },
      { field: 'birthYearRatio_2018_2017', header: 'Birth Year Ratio 2018-2017 ' },
  
  ];
this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));

this.stateId=this.route.snapshot.paramMap.get('stateId');
this.stateName=this.route.snapshot.paramMap.get('stateName');
console.log(this.stateId);
console.log(this.stateName);

this.getdata();
}


async getdata(){
  this.datalist = await lastValueFrom(this.householdService.getAllBirthDisplacementTeamwise(this.stateId));
}

exportPdf() {
  import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then((x) => {
          const doc = new jsPDF.default('l', 'px', 'a3');
          (doc as any).autoTable(this.exportColumns, this.datalist);
          doc.save('Birth-Displacement-teamwise.pdf');
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
  FileSaver.saveAs(data, fileName + '_Birth-Displacement-teamwise_' + new Date().getTime() + EXCEL_EXTENSION);
}
}

