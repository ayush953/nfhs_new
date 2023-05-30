import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as FileSaver from 'file-saver';
import { lastValueFrom } from 'rxjs';
import { HouseholdService } from 'src/app/services/household.service';

@Component({
    selector: 'app-eligible-women-per-hh-memberwise',
    templateUrl: './eligible-women-per-hh-memberwise.component.html',
    styleUrls: ['./eligible-women-per-hh-memberwise.component.scss'],
})
export class EligibleWomenPerHhMemberwiseComponent {
    constructor(
        private householdService: HouseholdService,
        private route: ActivatedRoute
    ) {}

    datalist: any[] = [];
    title = 'datatables';
    dtOptions: any = {};

    // for csv download
    cols: any[] = [];
    selectedDatalist: any[] = [];
    exportColumns: any[] = [];
    stateId!: string | null;
    stateName!: string | null;
    teamNo!: string | null;
    teamName!: string | null;
    ngOnInit() {
        // for csv download
        this.cols = [
            {
                field: 'member',
                header: 'member',
                customExportHeader: 'Datalist Code',
            },
            {
                field: 'noOfCompletedHhUrban',
                header: 'Number of Completed Households (Urban)',
            },
            {
                field: 'noOfDeFactoEligibleWomenInCompletedHhUrban',
                header: 'Number of de facto eligible women in those HHs (Urban)',
            },
            {
                field: 'meanNoOfDeFactoEligibleWomenPerHhUrban',
                header: 'Mean number of de facto eligible women per HH (Urban)',
            },
            {
                field: 'noOfCompletedHhRural',
                header: 'Number of Completed Households (Rural)',
            },
            {
                field: 'noOfDeFactoEligibleWomenInCompletedHhRural',
                header: 'Number of de facto eligible women in those HHs (Rural)',
            },
            {
                field: 'meanNoOfDeFactoEligibleWomenPerHhRural',
                header: 'Mean number of de facto eligible women per HH (Rural)',
            },
        ];
        this.exportColumns = this.cols.map((col) => ({
            title: col.header,
            dataKey: col.field,
        }));
        this.stateId = this.route.snapshot.paramMap.get('stateId');
        this.stateName = this.route.snapshot.paramMap.get('stateName');
        this.teamNo = this.route.snapshot.paramMap.get('teamNo');
        this.teamName = this.route.snapshot.paramMap.get('teamName');
        console.log(this.stateId);
        console.log(this.stateName);
        // console.log(this.exportColumns);
        this.getdata();
    }

    async getdata() {
        this.datalist = await lastValueFrom(
            this.householdService.getAllEligibleWomenPerHhMemberwise(
                this.stateId,
                this.teamNo
            )
        );
        //this.householdService.getAllEligibleMenPerHh().then()
        //console.log(this.datalist);
    }

    exportPdf() {
        import('jspdf').then((jsPDF) => {
            import('jspdf-autotable').then((x) => {
                const doc = new jsPDF.default('l', 'px', 'a3');
                (doc as any).autoTable(this.exportColumns, this.datalist);
                doc.save('women-per-hh-memberwise.pdf');
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
            fileName + '_women-per-hh-memberwise_' + new Date().getTime() + EXCEL_EXTENSION
        );
    }
}
