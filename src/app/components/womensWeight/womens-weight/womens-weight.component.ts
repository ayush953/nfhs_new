import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { lastValueFrom } from 'rxjs';
import { HouseholdService } from 'src/app/services/household.service';

@Component({
  selector: 'app-womens-weight',
  templateUrl: './womens-weight.component.html',
  styleUrls: ['./womens-weight.component.scss']
})
export class WomensWeightComponent implements OnInit{
  constructor(private householdService: HouseholdService) {}

  datalist: any[] = [];
  title = 'datatables';
  dtOptions: any = {};

  // for csv download
  cols: any[] = [];
  selectedDatalist: any[] = [];
  exportColumns: any[] = [];
  ngOnInit() {
      // for csv download
      this.cols = [
          {
              field: 'state',
              header: 'State',
              customExportHeader: 'Datalist Code',
          },
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
              header: 'Missing  [Result of Weight measurement]',
          },

          {
            field: 'total',
            header: 'Total',
        },
        {
          field: 'numberOfWomen',
          header: 'Number of women 15-49 ',
      },
      {
        field: 'womenWtOutOfRange',
        header: 'Among women measured Weight out of range (%) ',
    },
    {
      field: 'womenWithValidWtData',
      header: 'Women with Valid Weight Data (%) ',
    },
      ];
      this.exportColumns = this.cols.map((col) => ({
          title: col.header,
          dataKey: col.field,
      }));
      // console.log(this.exportColumns);
      this.getdata();
  }

  async getdata() {
      this.datalist = await lastValueFrom(
          this.householdService.getAllWomensWeight()
      );
      //this.householdService.getAllEligibleMenPerHh().then()
      //console.log(this.datalist);
  }

  exportPdf() {
      import('jspdf').then((jsPDF) => {
          import('jspdf-autotable').then((x) => {
              const doc = new jsPDF.default('l', 'px', 'a3');
              (doc as any).autoTable(this.exportColumns, this.datalist);
              doc.save('Womens-Weight.pdf');
          });
      });
  }

  exportExcel() {
      import('xlsx').then((xlsx) => {
          const worksheet = xlsx.utils.json_to_sheet(this.datalist);
          const workbook = {
              Sheets: { data: worksheet },
              SheetNames: ['data'],
          };
          const excelBuffer: any = xlsx.write(workbook, {
              bookType: 'xlsx',
              type: 'array',
          });
          this.saveAsExcelFile(excelBuffer, 'datalist');
      });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
      let EXCEL_TYPE =
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
          type: EXCEL_TYPE,
      });
      FileSaver.saveAs(
          data,
          fileName + '_Womens-Weight_' + new Date().getTime() + EXCEL_EXTENSION
      );
  }
}
