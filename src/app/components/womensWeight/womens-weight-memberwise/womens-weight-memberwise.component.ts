import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as FileSaver from 'file-saver';
import { HouseholdService } from 'src/app/services/household.service';

@Component({
  selector: 'app-womens-weight-memberwise',
  templateUrl: './womens-weight-memberwise.component.html',
  styleUrls: ['./womens-weight-memberwise.component.scss']
})
export class WomensWeightMemberwiseComponent implements OnInit{
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
      field: 'mesured',
      header: 'Measured [Result of Weight measurement]',
  },
  {
      field: 'womenNotPresent',
      header: 'Woman not present [Result of Weight measurement]',
  },
  {
      field: 'womenRefused',
      header: 'Woman Refused [Result of Weight measurement]',
  },
  {
      field: 'other',
      header: 'Other [Result of Weight measurement]',
  },
  {
      field: 'missing',
      header: 'Missing [Result of Weight measurement]',
  },

  {
    field: 'total',
    header: 'Total ',
},
{
  field: 'numberOfWomen',
  header: 'Number of Women 15-49 ',
},
{
field: 'womenWtOutOfRange',
header: 'Among Women Measured Weight out of Range (%) ',
},
{
field: 'womenWithValidWtData',
header: 'Women with Valid Weight Data (%) ',
},
  ];
    this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));

    this.stateId = this.route.snapshot.paramMap.get('stateId');
    this.stateName = this.route.snapshot.paramMap.get('stateName');
    this.teamNo = this.route.snapshot.paramMap.get('teamNo');
    this.teamName = this.route.snapshot.paramMap.get('teamName');
    console.log(this.stateId);
    console.log(this.stateName);

    this.householdService.getAllWomensWeightMemberwise(this.stateId,this.teamNo).subscribe(
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
          doc.save('Womens-Weight-memberwise.pdf');
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
  FileSaver.saveAs(data, fileName + '_Womens-Weight-memberwise_' + new Date().getTime() + EXCEL_EXTENSION);
}




}

