import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as FileSaver from 'file-saver';
import { HouseholdService } from 'src/app/services/household.service';

@Component({
  selector: 'app-mens-height-memberwise',
  templateUrl: './mens-height-memberwise.component.html',
  styleUrls: ['./mens-height-memberwise.component.scss']
})
export class MensHeightMemberwiseComponent implements OnInit{
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

   // for csv download               
   this.cols = [                
    { field: 'member', header: 'Member', customExportHeader: 'Datalist Code' },
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

    this.stateId = this.route.snapshot.paramMap.get('stateId');
    this.stateName = this.route.snapshot.paramMap.get('stateName');
    this.teamNo = this.route.snapshot.paramMap.get('teamNo');
    this.teamName = this.route.snapshot.paramMap.get('teamName');
    console.log(this.stateId);
    console.log(this.stateName);

    this.householdService.getAllMensHeightMemberwise(this.stateId,this.teamNo).subscribe(
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
          doc.save('Mens-Height-Memberwise.pdf');
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
  FileSaver.saveAs(data, fileName + '_Mens-Height-Memberwise_' + new Date().getTime() + EXCEL_EXTENSION);
}




}


