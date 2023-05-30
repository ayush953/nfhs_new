import { Component } from '@angular/core';
import * as FileSaver from 'file-saver';
import { HouseholdService } from 'src/app/services/household.service';
import { lastValueFrom } from 'rxjs';

@Component({
    selector: 'app-age-displacement-men-lower-limit',
    templateUrl: './age-displacement-men-lower-limit.component.html',
    styleUrls: ['./age-displacement-men-lower-limit.component.scss'],
})
export class AgeDisplacementMenLowerLimitComponent {
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
                field: 'age_12',
                header: '12',
            },
            {
                field: 'age_13',
                header: '13',
            },
            {
                field: 'age_14',
                header: '14',
            },
            {
                field: 'age_15',
                header: '15',
            },
            {
                field: 'age_16',
                header: '16',
            },
            {
                field: 'age_17',
                header: '17',
            },
            {
                field: 'age_18',
                header: '18',
            },
            {
                field: 'numberOfMen',
                header: 'numberOfMan',
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
            this.householdService.getAllAgeDisplacementMenLowerLimit()
        );
        //this.householdService.getAllEligibleMenPerHh().then()
        //console.log(this.datalist);
    }

    exportPdf() {
        import('jspdf').then((jsPDF) => {
            import('jspdf-autotable').then((x) => {
                const doc = new jsPDF.default('l', 'px', 'a3');
                (doc as any).autoTable(this.exportColumns, this.datalist);
                doc.save('age-displacement-men-lower-limit.pdf');
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
            fileName + '_age-displacement-men-lower-limit_' + new Date().getTime() + EXCEL_EXTENSION
        );
    }
}
