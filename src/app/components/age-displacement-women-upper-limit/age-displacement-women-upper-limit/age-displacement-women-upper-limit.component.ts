import { Component } from '@angular/core';
import * as FileSaver from 'file-saver';
import { lastValueFrom } from 'rxjs';
import { HouseholdService } from 'src/app/services/household.service';

@Component({
    selector: 'app-age-displacement-women-upper-limit',
    templateUrl: './age-displacement-women-upper-limit.component.html',
    styleUrls: ['./age-displacement-women-upper-limit.component.scss'],
})
export class AgeDisplacementWomenUpperLimitComponent {
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
                field: '52',
                header: '52',
            },
            {
                field: '53',
                header: '53',
            },
            {
                field: '54',
                header: '54',
            },
            {
                field: '55',
                header: '55',
            },
            {
                field: '56',
                header: '56',
            },
            {
                field: '57',
                header: '57',
            },
            {
                field: '58',
                header: '58',
            },
            {
                field: 'numberOfWomen',
                header: 'numberOfWoman',
            },
            {
                field: 'ageRatio',
                header: 'ageRatio',
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
            this.householdService.getAllAgeDisplacementMenUpperLimit()
        );
        //this.householdService.getAllEligibleMenPerHh().then()
        //console.log(this.datalist);
    }

    exportPdf() {
        import('jspdf').then((jsPDF) => {
            import('jspdf-autotable').then((x) => {
                const doc = new jsPDF.default('l', 'px', 'a3');
                (doc as any).autoTable(this.exportColumns, this.datalist);
                doc.save('age-displacement-women-upper-limit.pdf');
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
            fileName + '_age-displacement-women-upper-limit_' + new Date().getTime() + EXCEL_EXTENSION
        );
    }
}
