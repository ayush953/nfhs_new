import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as FileSaver from 'file-saver';
import { HouseholdService } from 'src/app/services/household.service';

@Component({
  selector: 'app-childrens-height-memberwise',
  templateUrl: './childrens-height-memberwise.component.html',
  styleUrls: ['./childrens-height-memberwise.component.scss']
})
export class ChildrensHeightMemberwiseComponent 
{
  constructor(
    private householdService: HouseholdService,
    private route: ActivatedRoute
  ) {}

  datalist: any[]=[];
  title = 'datatables';
  // dtOptions: any = {};
  stateId!: string | null;
  stateName!: string | null;
  teamNo!: string | null;
  teamName!: string | null;

// for csv download
  cols: any[]=[];                
selectedDatalist: any[]=[];    
exportColumns :any[]=[];
  
 
  ngOnInit() {

    this.cols = [                
      { field: 'member', header: 'member', customExportHeader: 'Datalist Code' },
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

    this.stateId = this.route.snapshot.paramMap.get('stateId');
    this.stateName = this.route.snapshot.paramMap.get('stateName');
    this.teamNo = this.route.snapshot.paramMap.get('teamNo');
    this.teamName = this.route.snapshot.paramMap.get('teamName');
    console.log(this.stateId);
    console.log(this.stateName);

    this.householdService.getAllChildrensHeightMemberwise(this.stateId,this.teamNo).subscribe(
      (datalist) => {
        console.log(datalist);
        this.datalist = datalist;
      },
    
    );
}

exportPdf() {
  import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then((x) => {
          const doc = new jsPDF.default('l', 'px', 'a3');
          (doc as any).autoTable(this.exportColumns, this.datalist);
          doc.save('childrens-height-memberwise.pdf');
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
  FileSaver.saveAs(data, fileName + '_childrens-height-memberwise_' + new Date().getTime() + EXCEL_EXTENSION);
}




}
