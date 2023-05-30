import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { HouseholdService } from '../services/household.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];
    field: any;
    constructor(public layoutService: LayoutService,public householdService: HouseholdService) {}

    ngOnInit() {
        console.log("side bar loaded....");
  this.field=this.householdService.changedValue();
  console.log(this.field);
        this.model = [
            {
                label: 'Home',
                status: 'dashboard',
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/'],
                        
                    },
                ],
            },
            {
                label:'Reports',
            },

            {
                //  label: 'Reports',
                status: 'social',
                items: [
                    {
                        label: 'Mens per household',
                        icon: 'pi pi-bars',
                        items: [
                            {
                                label: 'Eligible Men per household',
                                icon: 'pi pi-bars',
                                routerLink: ['getAllEligibleMenPerHhReport'],
                            },
                            {
                                label: 'StateWise',
                                icon: 'pi pi-bars',
                                //
                                items: [
                                    {
                                        label: 'Assam',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllEligibleMenPerHhReportTeamwise/1/Assam'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 1'
                                                ],
                                            },

                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleMenPerHhMemberwise/1/Assam/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleMenPerHhMemberwise/1/Assam/3/Team 3'
                                                ],
                                            },
                                            {
                                                label: 'Team 4',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleMenPerHhMemberwise/1/Assam/4/Team 4'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (North)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllEligibleMenPerHhReportTeamwise/2/Bihar (North)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleMenPerHhMemberwise/2/Bihar (North)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleMenPerHhMemberwise/2/Bihar (North)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleMenPerHhMemberwise/2/Bihar (North)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (South)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllEligibleMenPerHhReportTeamwise/3/Bihar (South)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleMenPerHhMemberwise/3/Bihar (South)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleMenPerHhMemberwise/3/Bihar (South)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleMenPerHhMemberwise/3/Bihar (South)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - South',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllEligibleMenPerHhReportTeamwise/4/Tamil Nadu - South'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleMenPerHhMemberwise/4/Tamil Nadu - South/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleMenPerHhMemberwise/4/Tamil Nadu - South/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleMenPerHhMemberwise/4/Tamil Nadu - South/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Manipur',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllEligibleMenPerHhReportTeamwise/5/Manipur'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleMenPerHhMemberwise/5/Manipur/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleMenPerHhMemberwise/5/Manipur/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleMenPerHhMemberwise/5/Manipur/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Meghalaya',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllEligibleMenPerHhReportTeamwise/6/Meghalaya'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleMenPerHhMemberwise/6/Meghalaya/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleMenPerHhMemberwise/6/Meghalaya/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleMenPerHhMemberwise/6/Meghalaya/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Mizoram',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllEligibleMenPerHhReportTeamwise/7/Mizoram'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllEligibleMenPerHhMemberwise/7/Mizoram/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllEligibleMenPerHhMemberwise/7/Mizoram/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllEligibleMenPerHhMemberwise/7/Mizoram/1/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Sikkim',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleMenPerHhReportTeamwise/8/Sikkim'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllEligibleMenPerHhMemberwise/8/Sikkim/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllEligibleMenPerHhMemberwise/8/Sikkim/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllEligibleMenPerHhMemberwise/8/Sikkim/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Andhra Pradesh & AN',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleMenPerHhReportTeamwise/11/Andhra Pradesh & AN'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllEligibleMenPerHhMemberwise/11/Andhra Pradesh & AN/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllEligibleMenPerHhMemberwise/11/Andhra Pradesh & AN/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllEligibleMenPerHhMemberwise/11/Andhra Pradesh & AN/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Himachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleMenPerHhReportTeamwise/14/Himachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllEligibleMenPerHhMemberwise/14/Himachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleMenPerHhMemberwise/14/Himachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleMenPerHhMemberwise/14/Himachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Jammu & Kashmir',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleMenPerHhReportTeamwise/15/Jammu & Kashmir'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleMenPerHhMemberwise/15/Jammu & Kashmir/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleMenPerHhMemberwise/15/Jammu & Kashmir/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleMenPerHhMemberwise/15/Jammu & Kashmir/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Kerala & Lakshadweep',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleMenPerHhReportTeamwise/18/Kerala & Lakshadweep'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleMenPerHhMemberwise/18/Kerala & Lakshadweep/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleMenPerHhMemberwise/18/Kerala & Lakshadweep/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleMenPerHhMemberwise/18/Kerala & Lakshadweep/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleMenPerHhReportTeamwise/19/Maharashtra (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleMenPerHhMemberwise/19/Maharashtra (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleMenPerHhMemberwise/19/Maharashtra (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleMenPerHhMemberwise/19/Maharashtra (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleMenPerHhReportTeamwise/20/Maharashtra (West)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleMenPerHhMemberwise/20/Maharashtra (West)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleMenPerHhMemberwise/20/Maharashtra (West)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleMenPerHhMemberwise/20/Maharashtra (West)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Arunachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleMenPerHhReportTeamwise/22/Arunachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink:
                                                ['getAllEligibleMenPerHhMemberwise/22/Arunachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink:
                                                ['getAllEligibleMenPerHhMemberwise/22/Arunachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink:
                                                ['getAllEligibleMenPerHhMemberwise/22/Arunachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - North & Puducherry',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleMenPerHhReportTeamwise/36/Tamil Nadu - North & Puducherry'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink:
                                                ['getAllEligibleMenPerHhMemberwise/36/Tamil Nadu - North & Puducherry/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink:
                                                ['getAllEligibleMenPerHhMemberwise/36/Tamil Nadu - North & Puducherry/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink:
                                                ['getAllEligibleMenPerHhMemberwise/36/Tamil Nadu - North & Puducherry/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleMenPerHhReportTeamwise/12/Gujarat (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink:
                                                ['getAllEligibleMenPerHhMemberwise/12/Gujarat (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink:
                                                ['getAllEligibleMenPerHhMemberwise/12/Gujarat (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink:
                                                ['getAllEligibleMenPerHhMemberwise/12/Gujarat (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (West) Daman Diu & Dadra Nagar Haweli',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleMenPerHhReportTeamwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink:
                                                ['getAllEligibleMenPerHhMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink:
                                                ['getAllEligibleMenPerHhMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink:
                                                ['getAllEligibleMenPerHhMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleMenPerHhReportTeamwise/28/Rajasthan (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink:
                                                ['getAllEligibleMenPerHhMemberwise/28/Rajasthan (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink:
                                                ['getAllEligibleMenPerHhMemberwise/28/Rajasthan (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink:
                                                ['getAllEligibleMenPerHhMemberwise/28/Rajasthan (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleMenPerHhReportTeamwise/37/Rajasthan (West)'],
                                            items: [
                                                {
                                                    label: 'Team 1',
                                                    icon: 'pi pi-bars',
                                                    routerLink:
                                                    ['getAllEligibleMenPerHhMemberwise/37/Rajasthan (West)/1/Team 1'],
                                                },
                                                {
                                                    label: 'Team 2',
                                                    icon: 'pi pi-bars',
                                                    routerLink:
                                                    ['getAllEligibleMenPerHhMemberwise/37/Rajasthan (West)/2/Team 2'],
                                                },
                                                {
                                                    label: 'Team 3',
                                                    icon: 'pi pi-bars',
                                                    routerLink:
                                                    ['getAllEligibleMenPerHhMemberwise/37/Rajasthan (West)/3/Team 3'],
                                                },
                                            ],
                                    },
                                    {
                                        label: 'Nagaland',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleMenPerHhReportTeamwise/39/Nagaland'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink:
                                                ['getAllEligibleMenPerHhReportMemberwise/39/Nagaland/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink:
                                                ['getAllEligibleMenPerHhReportMemberwise/39/Nagaland/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink:
                                                ['getAllEligibleMenPerHhReportMemberwise/39/Nagaland/3/Team 3'],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },

                {
                    
                    status: 'social',
                    items:[
                        {
                        label: 'Women per household',
                        icon: 'pi pi-bars',
                        items: [
                            {
                                label: 'Eligible Women per household',
                                icon: 'pi pi-bars',
                                routerLink: ['getAllEligibleWomenPerHhReport'],
                            },
                            {
                                label: 'StateWise',
                                icon: 'pi pi-bars',
                                //
                                items: [
                                    {
                                        label: 'Assam',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllEligibleWomenPerHhReportTeamwise/1/Assam'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenPerHhMemberwise/1/Assam/1/Team 1'
                                                ],
                                            },

                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenPerHhMemberwise/1/Assam/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenPerHhMemberwise/1/Assam/3/Team 3'
                                                ],
                                            },
                                            {
                                                label: 'Team 4',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenPerHhMemberwise/1/Assam/4/Team 4'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (North)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllEligibleWomenPerHhReportTeamwise/2/Bihar (North)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenPerHhMemberwise/2/Bihar (North)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenPerHhMemberwise/2/Bihar (North)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenPerHhMemberwise/2/Bihar (North)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (South)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllEligibleWomenPerHhReportTeamwise/3/Bihar (South)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenPerHhMemberwise/3/Bihar (South)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenPerHhMemberwise/3/Bihar (South)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenPerHhMemberwise/3/Bihar (South)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - South',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllEligibleWomenPerHhReportTeamwise/4/Tamil Nadu - South'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenPerHhMemberwise/4/Tamil Nadu - South/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenPerHhMemberwise/4/Tamil Nadu - South/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenPerHhMemberwise/4/Tamil Nadu - South/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Manipur',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllEligibleWomenPerHhReportTeamwise/5/Manipur'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenPerHhMemberwise/5/Manipur/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenPerHhMemberwise/5/Manipur/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenPerHhMemberwise/5/Manipur/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Meghalaya',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllEligibleWomenPerHhReportTeamwise/6/Meghalaya'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenPerHhMemberwise/6/Meghalaya/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenPerHhMemberwise/6/Meghalaya/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenPerHhMemberwise/6/Meghalaya/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Mizoram',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllEligibleWomenPerHhReportTeamwise/7/Mizoram'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllEligibleWomenPerHhMemberwise/7/Mizoram/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllEligibleWomenPerHhMemberwise/7/Mizoram/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllEligibleWomenPerHhMemberwise/7/Mizoram/1/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Sikkim',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleWomenPerHhReportTeamwise/8/Sikkim'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllEligibleWomenPerHhMemberwise/8/Sikkim/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllEligibleWomenPerHhMemberwise/8/Sikkim/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllEligibleWomenPerHhMemberwise/8/Sikkim/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Andhra Pradesh & AN',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleWomenPerHhReportTeamwise/11/Andhra Pradesh & AN'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllEligibleWomenPerHhMemberwise/11/Andhra Pradesh & AN/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllEligibleWomenPerHhMemberwise/11/Andhra Pradesh & AN/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllEligibleWomenPerHhMemberwise/11/Andhra Pradesh & AN/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Himachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleWomenPerHhReportTeamwise/14/Himachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllEligibleWomenPerHhMemberwise/14/Himachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleWomenPerHhMemberwise/14/Himachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleWomenPerHhMemberwise/14/Himachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Jammu & Kashmir',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleWomenPerHhReportTeamwise/15/Jammu & Kashmir'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleWomenPerHhMemberwise/15/Jammu & Kashmir/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleWomenPerHhMemberwise/15/Jammu & Kashmir/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleWomenPerHhMemberwise/15/Jammu & Kashmir/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Kerala & Lakshadweep',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleWomenPerHhReportTeamwise/18/Kerala & Lakshadweep'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleWomenPerHhMemberwise/18/Kerala & Lakshadweep/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleWomenPerHhMemberwise/18/Kerala & Lakshadweep/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleWomenPerHhMemberwise/18/Kerala & Lakshadweep/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleWomenPerHhReportTeamwise/19/Maharashtra (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleWomenPerHhMemberwise/19/Maharashtra (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleWomenPerHhMemberwise/19/Maharashtra (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleWomenPerHhMemberwise/19/Maharashtra (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleWomenPerHhReportTeamwise/20/Maharashtra (West)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleWomenPerHhMemberwise/20/Maharashtra (West)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleWomenPerHhMemberwise/20/Maharashtra (West)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleWomenPerHhMemberwise/20/Maharashtra (West)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Arunachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleWomenPerHhReportTeamwise/22/Arunachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleWomenPerHhMemberwise/22/Arunachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleWomenPerHhMemberwise/22/Arunachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleWomenPerHhMemberwise/22/Arunachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - North & Puducherry',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleWomenPerHhReportTeamwise/36/Tamil Nadu - North & Puducherry'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleWomenPerHhMemberwise/36/Tamil Nadu - North & Puducherry/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleWomenPerHhMemberwise/36/Tamil Nadu - North & Puducherry/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleWomenPerHhMemberwise/36/Tamil Nadu - North & Puducherry/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleWomenPerHhReportTeamwise/12/Gujarat (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleWomenPerHhMemberwise/12/Gujarat (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleWomenPerHhMemberwise/12/Gujarat (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleWomenPerHhMemberwise/12/Gujarat (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (West) Daman Diu & Dadra Nagar Haweli',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleWomenPerHhReportTeamwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleWomenPerHhMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleWomenPerHhMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleWomenPerHhMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleWomenPerHhReportTeamwise/28/Rajasthan (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleWomenPerHhMemberwise/28/Rajasthan (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleWomenPerHhMemberwise/28/Rajasthan (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleWomenPerHhMemberwise/28/Rajasthan (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleWomenPerHhReportTeamwise/37/Rajasthan (West)'],
                                            items: [
                                                {
                                                    label: 'Team 1',
                                                    routerLink:
                                                    ['getAllEligibleWomenPerHhMemberwise/37/Rajasthan (West)/1/Team 1'],
                                                },
                                                {
                                                    label: 'Team 2',
                                                    routerLink:
                                                    ['getAllEligibleWomenPerHhMemberwise/37/Rajasthan (West)/2/Team 2'],
                                                },
                                                {
                                                    label: 'Team 3',
                                                    routerLink:
                                                    ['getAllEligibleWomenPerHhMemberwise/37/Rajasthan (West)/3/Team 3'],
                                                },
                                            ],
                                    },
                                    {
                                        label: 'Nagaland',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleWomenPerHhReportTeamwise/39/Nagaland'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleWomenPerHhReportMemberwise/39/Nagaland/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleWomenPerHhReportMemberwise/39/Nagaland/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleWomenPerHhReportMemberwise/39/Nagaland/3/Team 3'],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },

                {
                    status: 'social',
                    items:[
                        {
                        label: 'Household Visits',
                        
                        icon: 'pi pi-bars',
                        items: [
                            {
                                label: 'Household Visits',
                                icon: 'pi pi-bars',
                                routerLink: ['getAllVisitsHh'],
                            },
                            {
                                label: 'StateWise',
                                icon: 'pi pi-bars',
                                //
                                items: [
                                    {
                                        label: 'Assam',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllVisitsHhTeamwise/1/Assam'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVisitsHhMemberwise/1/Assam/1/Team 1'
                                                ],
                                            },

                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVisitsHhMemberwise/1/Assam/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVisitsHhMemberwise/1/Assam/3/Team 3'
                                                ],
                                            },
                                            {
                                                label: 'Team 4',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVisitsHhMemberwise/1/Assam/4/Team 4'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (North)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllVisitsHhTeamwise/2/Bihar (North)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVisitsHhMemberwise/2/Bihar (North)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVisitsHhMemberwise/2/Bihar (North)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVisitsHhMemberwise/2/Bihar (North)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (South)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllVisitsHhTeamwise/3/Bihar (South)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVisitsHhMemberwise/3/Bihar (South)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVisitsHhMemberwise/3/Bihar (South)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVisitsHhMemberwise/3/Bihar (South)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - South',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllVisitsHhTeamwise/4/Tamil Nadu - South'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVisitsHhMemberwise/4/Tamil Nadu - South/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVisitsHhMemberwise/4/Tamil Nadu - South/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVisitsHhMemberwise/4/Tamil Nadu - South/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Manipur',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllVisitsHhTeamwise/5/Manipur'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVisitsHhMemberwise/5/Manipur/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVisitsHhMemberwise/5/Manipur/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVisitsHhMemberwise/5/Manipur/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Meghalaya',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllVisitsHhTeamwise/6/Meghalaya'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVisitsHhMemberwise/6/Meghalaya/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVisitsHhMemberwise/6/Meghalaya/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVisitsHhMemberwise/6/Meghalaya/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Mizoram',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllVisitsHhTeamwise/7/Mizoram'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllVisitsHhMemberwise/7/Mizoram/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllVisitsHhMemberwise/7/Mizoram/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllVisitsHhMemberwise/7/Mizoram/1/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Sikkim',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllVisitsHhTeamwise/8/Sikkim'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllVisitsHhMemberwise/8/Sikkim/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllVisitsHhMemberwise/8/Sikkim/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllVisitsHhMemberwise/8/Sikkim/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Andhra Pradesh & AN',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllVisitsHhTeamwise/11/Andhra Pradesh & AN'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllVisitsHhMemberwise/11/Andhra Pradesh & AN/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllVisitsHhMemberwise/11/Andhra Pradesh & AN/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllVisitsHhMemberwise/11/Andhra Pradesh & AN/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Himachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllVisitsHhTeamwise/14/Himachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllVisitsHhMemberwise/14/Himachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllVisitsHhMemberwise/14/Himachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllVisitsHhMemberwise/14/Himachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Jammu & Kashmir',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllVisitsHhTeamwise/15/Jammu & Kashmir'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllVisitsHhMemberwise/15/Jammu & Kashmir/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllVisitsHhMemberwise/15/Jammu & Kashmir/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllVisitsHhMemberwise/15/Jammu & Kashmir/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Kerala & Lakshadweep',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllVisitsHhTeamwise/18/Kerala & Lakshadweep'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllVisitsHhMemberwise/18/Kerala & Lakshadweep/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllVisitsHhMemberwise/18/Kerala & Lakshadweep/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllVisitsHhMemberwise/18/Kerala & Lakshadweep/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllVisitsHhTeamwise/19/Maharashtra (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllVisitsHhMemberwise/19/Maharashtra (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllVisitsHhMemberwise/19/Maharashtra (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllVisitsHhMemberwise/19/Maharashtra (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllVisitsHhTeamwise/20/Maharashtra (West)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllVisitsHhMemberwise/20/Maharashtra (West)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllVisitsHhMemberwise/20/Maharashtra (West)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllVisitsHhMemberwise/20/Maharashtra (West)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Arunachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllVisitsHhTeamwise/22/Arunachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllVisitsHhMemberwise/22/Arunachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllVisitsHhMemberwise/22/Arunachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllVisitsHhMemberwise/22/Arunachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - North & Puducherry',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllVisitsHhTeamwise/36/Tamil Nadu - North & Puducherry'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllVisitsHhMemberwise/36/Tamil Nadu - North & Puducherry/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllVisitsHhMemberwise/36/Tamil Nadu - North & Puducherry/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllVisitsHhMemberwise/36/Tamil Nadu - North & Puducherry/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllVisitsHhTeamwise/12/Gujarat (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllVisitsHhMemberwise/12/Gujarat (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllVisitsHhMemberwise/12/Gujarat (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllVisitsHhMemberwise/12/Gujarat (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (West) Daman Diu & Dadra Nagar Haweli',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllVisitsHhTeamwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllVisitsHhMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllVisitsHhMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllVisitsHhMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllVisitsHhTeamwise/28/Rajasthan (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllVisitsHhMemberwise/28/Rajasthan (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllVisitsHhMemberwise/28/Rajasthan (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllVisitsHhMemberwise/28/Rajasthan (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllVisitsHhTeamwise/37/Rajasthan (West)'],
                                            items: [
                                                {
                                                    label: 'Team 1',
                                                    routerLink:
                                                    ['getAllVisitsHhMemberwise/37/Rajasthan (West)/1/Team 1'],
                                                },
                                                {
                                                    label: 'Team 2',
                                                    routerLink:
                                                    ['getAllVisitsHhMemberwise/37/Rajasthan (West)/2/Team 2'],
                                                },
                                                {
                                                    label: 'Team 3',
                                                    routerLink:
                                                    ['getAllVisitsHhMemberwise/37/Rajasthan (West)/3/Team 3'],
                                                },
                                            ],
                                    },
                                    {
                                        label: 'Nagaland',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllVisitsHhTeamwise/39/Nagaland'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllVisitsHhMemberwise/39/Nagaland/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllVisitsHhMemberwise/39/Nagaland/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllVisitsHhMemberwise/39/Nagaland/3/Team 3'],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },


                {
                    status: 'social',
                    items:[
                        {
                        label: 'Household Completion Rate',
                        
                        icon: 'pi pi-bars',
                        items: [
                            {
                                label: 'Household Completion Rate',
                                icon: 'pi pi-bars',
                                routerLink: ['getAllHhCompletionRate'],
                            },
                            {
                                label: 'StateWise',
                                icon: 'pi pi-bars',
                                //
                                items: [
                                    {
                                        label: 'Assam',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllHhCompletionRateTeamwise/1/Assam'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHhCompletionRateMemberwise/1/Assam/1/Team 1'
                                                ],
                                            },

                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHhCompletionRateMemberwise/1/Assam/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHhCompletionRateMemberwise/1/Assam/3/Team 3'
                                                ],
                                            },
                                            {
                                                label: 'Team 4',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHhCompletionRateMemberwise/1/Assam/4/Team 4'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (North)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllHhCompletionRateTeamwise/2/Bihar (North)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHhCompletionRateMemberwise/2/Bihar (North)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHhCompletionRateMemberwise/2/Bihar (North)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHhCompletionRateMemberwise/2/Bihar (North)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (South)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllHhCompletionRateTeamwise/3/Bihar (South)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHhCompletionRateMemberwise/3/Bihar (South)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHhCompletionRateMemberwise/3/Bihar (South)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHhCompletionRateMemberwise/3/Bihar (South)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - South',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllHhCompletionRateTeamwise/4/Tamil Nadu - South'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHhCompletionRateMemberwise/4/Tamil Nadu - South/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHhCompletionRateMemberwise/4/Tamil Nadu - South/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHhCompletionRateMemberwise/4/Tamil Nadu - South/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Manipur',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllHhCompletionRateTeamwise/5/Manipur'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHhCompletionRateMemberwise/5/Manipur/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHhCompletionRateMemberwise/5/Manipur/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHhCompletionRateMemberwise/5/Manipur/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Meghalaya',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllHhCompletionRateTeamwise/6/Meghalaya'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHhCompletionRateMemberwise/6/Meghalaya/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHhCompletionRateMemberwise/6/Meghalaya/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHhCompletionRateMemberwise/6/Meghalaya/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Mizoram',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllHhCompletionRateTeamwise/7/Mizoram'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllHhCompletionRateMemberwise/7/Mizoram/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllHhCompletionRateMemberwise/7/Mizoram/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllHhCompletionRateMemberwise/7/Mizoram/1/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Sikkim',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllHhCompletionRateTeamwise/8/Sikkim'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllHhCompletionRateMemberwise/8/Sikkim/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllHhCompletionRateMemberwise/8/Sikkim/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllHhCompletionRateMemberwise/8/Sikkim/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Andhra Pradesh & AN',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllHhCompletionRateTeamwise/11/Andhra Pradesh & AN'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllHhCompletionRateMemberwise/11/Andhra Pradesh & AN/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllHhCompletionRateMemberwise/11/Andhra Pradesh & AN/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllHhCompletionRateMemberwise/11/Andhra Pradesh & AN/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Himachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllHhCompletionRateTeamwise/14/Himachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllHhCompletionRateMemberwise/14/Himachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllHhCompletionRateMemberwise/14/Himachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllHhCompletionRateMemberwise/14/Himachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Jammu & Kashmir',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllHhCompletionRateTeamwise/15/Jammu & Kashmir'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllHhCompletionRateMemberwise/15/Jammu & Kashmir/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllHhCompletionRateMemberwise/15/Jammu & Kashmir/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllHhCompletionRateMemberwise/15/Jammu & Kashmir/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Kerala & Lakshadweep',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllHhCompletionRateTeamwise/18/Kerala & Lakshadweep'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllHhCompletionRateMemberwise/18/Kerala & Lakshadweep/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllHhCompletionRateMemberwise/18/Kerala & Lakshadweep/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllHhCompletionRateMemberwise/18/Kerala & Lakshadweep/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllHhCompletionRateTeamwise/19/Maharashtra (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllHhCompletionRateMemberwise/19/Maharashtra (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllHhCompletionRateMemberwise/19/Maharashtra (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllHhCompletionRateMemberwise/19/Maharashtra (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllHhCompletionRateTeamwise/20/Maharashtra (West)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllHhCompletionRateMemberwise/20/Maharashtra (West)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllHhCompletionRateMemberwise/20/Maharashtra (West)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllHhCompletionRateMemberwise/20/Maharashtra (West)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Arunachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllHhCompletionRateTeamwise/22/Arunachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllHhCompletionRateMemberwise/22/Arunachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllHhCompletionRateMemberwise/22/Arunachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllHhCompletionRateMemberwise/22/Arunachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - North & Puducherry',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllHhCompletionRateTeamwise/36/Tamil Nadu - North & Puducherry'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllHhCompletionRateMemberwise/36/Tamil Nadu - North & Puducherry/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllHhCompletionRateMemberwise/36/Tamil Nadu - North & Puducherry/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllHhCompletionRateMemberwise/36/Tamil Nadu - North & Puducherry/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllHhCompletionRateTeamwise/12/Gujarat (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllHhCompletionRateMemberwise/12/Gujarat (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllHhCompletionRateMemberwise/12/Gujarat (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllHhCompletionRateMemberwise/12/Gujarat (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (West) Daman Diu & Dadra Nagar Haweli',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllHhCompletionRateTeamwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllHhCompletionRateMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllHhCompletionRateMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllHhCompletionRateMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllHhCompletionRateTeamwise/28/Rajasthan (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllHhCompletionRateMemberwise/28/Rajasthan (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllHhCompletionRateMemberwise/28/Rajasthan (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllHhCompletionRateMemberwise/28/Rajasthan (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllHhCompletionRateTeamwise/37/Rajasthan (West)'],
                                            items: [
                                                {
                                                    label: 'Team 1',
                                                    routerLink:
                                                    ['getAllHhCompletionRateMemberwise/37/Rajasthan (West)/1/Team 1'],
                                                },
                                                {
                                                    label: 'Team 2',
                                                    routerLink:
                                                    ['getAllHhCompletionRateMemberwise/37/Rajasthan (West)/2/Team 2'],
                                                },
                                                {
                                                    label: 'Team 3',
                                                    routerLink:
                                                    ['getAllHhCompletionRateMemberwise/37/Rajasthan (West)/3/Team 3'],
                                                },
                                            ],
                                    },
                                    {
                                        label: 'Nagaland',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllHhCompletionRateTeamwise/39/Nagaland'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllHhCompletionRateMemberwise/39/Nagaland/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllHhCompletionRateMemberwise/39/Nagaland/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllHhCompletionRateMemberwise/39/Nagaland/3/Team 3'],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },


            {
                status: 'social',
                items:[
                    {
                        label: 'Age Displacement: Men(Lower Limit)',
                        
                        icon: 'pi pi-bars',
                        items: [
                            {
                                label: 'Age Displacement: Men(Lower Limit)',
                                icon: 'pi pi-bars',
                                routerLink: ['getAllAgeDisplacementMenLowerLimit'],
                            },
                            {
                                label: 'StateWise',
                                icon: 'pi pi-bars',
                                //
                                items: [
                                    {
                                        label: 'Assam',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllAgeDisplacementMenLowerLimitTeamwise/1/Assam'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenLowerLimitMemberwise/1/Assam/1/Team 1'
                                                ],
                                            },

                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenLowerLimitMemberwise/1/Assam/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenLowerLimitMemberwise/1/Assam/3/Team 3'
                                                ],
                                            },
                                            {
                                                label: 'Team 4',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenLowerLimitMemberwise/1/Assam/4/Team 4'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (North)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllAgeDisplacementMenLowerLimitTeamwise/2/Bihar (North)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenLowerLimitMemberwise/2/Bihar (North)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenLowerLimitMemberwise/2/Bihar (North)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenLowerLimitMemberwise/2/Bihar (North)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (South)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllAgeDisplacementMenLowerLimitTeamwise/3/Bihar (South)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenLowerLimitMemberwise/3/Bihar (South)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenLowerLimitMemberwise/3/Bihar (South)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenLowerLimitMemberwise/3/Bihar (South)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - South',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllAgeDisplacementMenLowerLimitTeamwise/4/Tamil Nadu - South'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenLowerLimitMemberwise/4/Tamil Nadu - South/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenLowerLimitMemberwise/4/Tamil Nadu - South/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenLowerLimitMemberwise/4/Tamil Nadu - South/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Manipur',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllAgeDisplacementMenLowerLimitTeamwise/5/Manipur'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenLowerLimitMemberwise/5/Manipur/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenLowerLimitMemberwise/5/Manipur/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenLowerLimitMemberwise/5/Manipur/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Meghalaya',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllAgeDisplacementMenLowerLimitTeamwise/6/Meghalaya'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenLowerLimitMemberwise/6/Meghalaya/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenLowerLimitMemberwise/6/Meghalaya/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenLowerLimitMemberwise/6/Meghalaya/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Mizoram',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllAgeDisplacementMenLowerLimitTeamwise/7/Mizoram'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllAgeDisplacementMenLowerLimitMemberwise/7/Mizoram/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllAgeDisplacementMenLowerLimitMemberwise/7/Mizoram/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllAgeDisplacementMenLowerLimitMemberwise/7/Mizoram/1/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Sikkim',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementMenLowerLimitTeamwise/8/Sikkim'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllAgeDisplacementMenLowerLimitMemberwise/8/Sikkim/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllAgeDisplacementMenLowerLimitMemberwise/8/Sikkim/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllAgeDisplacementMenLowerLimitMemberwise/8/Sikkim/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Andhra Pradesh & AN',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementMenLowerLimitTeamwise/11/Andhra Pradesh & AN'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllAgeDisplacementMenLowerLimitMemberwise/11/Andhra Pradesh & AN/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllAgeDisplacementMenLowerLimitMemberwise/11/Andhra Pradesh & AN/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllAgeDisplacementMenLowerLimitMemberwise/11/Andhra Pradesh & AN/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Himachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementMenLowerLimitTeamwise/14/Himachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllAgeDisplacementMenLowerLimitMemberwise/14/Himachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementMenLowerLimitMemberwise/14/Himachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementMenLowerLimitMemberwise/14/Himachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Jammu & Kashmir',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementMenLowerLimitTeamwise/15/Jammu & Kashmir'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementMenLowerLimitMemberwise/15/Jammu & Kashmir/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementMenLowerLimitMemberwise/15/Jammu & Kashmir/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementMenLowerLimitMemberwise/15/Jammu & Kashmir/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Kerala & Lakshadweep',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementMenLowerLimitTeamwise/18/Kerala & Lakshadweep'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementMenLowerLimitMemberwise/18/Kerala & Lakshadweep/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementMenLowerLimitMemberwise/18/Kerala & Lakshadweep/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementMenLowerLimitMemberwise/18/Kerala & Lakshadweep/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementMenLowerLimitTeamwise/19/Maharashtra (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementMenLowerLimitMemberwise/19/Maharashtra (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementMenLowerLimitMemberwise/19/Maharashtra (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementMenLowerLimitMemberwise/19/Maharashtra (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementMenLowerLimitTeamwise/20/Maharashtra (West)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementMenLowerLimitMemberwise/20/Maharashtra (West)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementMenLowerLimitMemberwise/20/Maharashtra (West)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementMenLowerLimitMemberwise/20/Maharashtra (West)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Arunachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementMenLowerLimitTeamwise/22/Arunachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementMenLowerLimitMemberwise/22/Arunachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementMenLowerLimitMemberwise/22/Arunachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementMenLowerLimitMemberwise/22/Arunachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - North & Puducherry',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementMenLowerLimitTeamwise/36/Tamil Nadu - North & Puducherry'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementMenLowerLimitMemberwise/36/Tamil Nadu - North & Puducherry/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementMenLowerLimitMemberwise/36/Tamil Nadu - North & Puducherry/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementMenLowerLimitMemberwise/36/Tamil Nadu - North & Puducherry/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementMenLowerLimitTeamwise/12/Gujarat (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementMenLowerLimitMemberwise/12/Gujarat (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementMenLowerLimitMemberwise/12/Gujarat (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementMenLowerLimitMemberwise/12/Gujarat (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (West) Daman Diu & Dadra Nagar Haweli',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementMenLowerLimitTeamwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementMenLowerLimitMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementMenLowerLimitMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementMenLowerLimitMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementMenLowerLimitTeamwise/28/Rajasthan (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementMenLowerLimitMemberwise/28/Rajasthan (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementMenLowerLimitMemberwise/28/Rajasthan (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementMenLowerLimitMemberwise/28/Rajasthan (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementMenLowerLimitTeamwise/37/Rajasthan (West)'],
                                            items: [
                                                {
                                                    label: 'Team 1',
                                                    routerLink:
                                                    ['getAllAgeDisplacementMenLowerLimitMemberwise/37/Rajasthan (West)/1/Team 1'],
                                                },
                                                {
                                                    label: 'Team 2',
                                                    routerLink:
                                                    ['getAllAgeDisplacementMenLowerLimitMemberwise/37/Rajasthan (West)/2/Team 2'],
                                                },
                                                {
                                                    label: 'Team 3',
                                                    routerLink:
                                                    ['getAllAgeDisplacementMenLowerLimitMemberwise/37/Rajasthan (West)/3/Team 3'],
                                                },
                                            ],
                                    },
                                    {
                                        label: 'Nagaland',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementMenLowerLimitTeamwise/39/Nagaland'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementMenLowerLimitMemberwise/39/Nagaland/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementMenLowerLimitMemberwise/39/Nagaland/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementMenLowerLimitMemberwise/39/Nagaland/3/Team 3'],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },


                  {
                    status: 'social',
                    items:[
                        {
                        label: 'Age Displacement: Men(Upper Limit)',
                        
                        icon: 'pi pi-bars',
                        items: [
                            {
                                label: 'Age Displacement: Men(Upper Limit)',
                                icon: 'pi pi-bars',
                                routerLink: ['getAllAgeDisplacementMenUpperLimit'],
                            },
                            {
                                label: 'StateWise',
                                icon: 'pi pi-bars',
                                //
                                items: [
                                    {
                                        label: 'Assam',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllAgeDisplacementMenUpperLimitTeamwise/1/Assam'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenUpperLimitMemberwise/1/Assam/1/Team 1'
                                                ],
                                            },

                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenUpperLimitMemberwise/1/Assam/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenUpperLimitMemberwise/1/Assam/3/Team 3'
                                                ],
                                            },
                                            {
                                                label: 'Team 4',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenUpperLimitMemberwise/1/Assam/4/Team 4'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (North)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllAgeDisplacementMenUpperLimitTeamwise/2/Bihar (North)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenUpperLimitMemberwise/2/Bihar (North)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenUpperLimitMemberwise/2/Bihar (North)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenUpperLimitMemberwise/2/Bihar (North)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (South)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllAgeDisplacementMenUpperLimitTeamwise/3/Bihar (South)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenUpperLimitMemberwise/3/Bihar (South)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenUpperLimitMemberwise/3/Bihar (South)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenUpperLimitMemberwise/3/Bihar (South)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - South',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllAgeDisplacementMenUpperLimitTeamwise/4/Tamil Nadu - South'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenUpperLimitMemberwise/4/Tamil Nadu - South/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenUpperLimitMemberwise/4/Tamil Nadu - South/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenUpperLimitMemberwise/4/Tamil Nadu - South/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Manipur',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllAgeDisplacementMenUpperLimitTeamwise/5/Manipur'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenUpperLimitMemberwise/5/Manipur/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenUpperLimitMemberwise/5/Manipur/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenUpperLimitMemberwise/5/Manipur/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Meghalaya',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllAgeDisplacementMenUpperLimitTeamwise/6/Meghalaya'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenUpperLimitMemberwise/6/Meghalaya/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenUpperLimitMemberwise/6/Meghalaya/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementMenUpperLimitMemberwise/6/Meghalaya/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Mizoram',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllAgeDisplacementMenUpperLimitTeamwise/7/Mizoram'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllAgeDisplacementMenUpperLimitMemberwise/7/Mizoram/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllAgeDisplacementMenUpperLimitMemberwise/7/Mizoram/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllAgeDisplacementMenUpperLimitMemberwise/7/Mizoram/1/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Sikkim',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementMenUpperLimitTeamwise/8/Sikkim'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllAgeDisplacementMenUpperLimitMemberwise/8/Sikkim/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllAgeDisplacementMenUpperLimitMemberwise/8/Sikkim/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllAgeDisplacementMenUpperLimitMemberwise/8/Sikkim/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Andhra Pradesh & AN',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementMenUpperLimitTeamwise/11/Andhra Pradesh & AN'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllAgeDisplacementMenUpperLimitMemberwise/11/Andhra Pradesh & AN/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllAgeDisplacementMenUpperLimitMemberwise/11/Andhra Pradesh & AN/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllAgeDisplacementMenUpperLimitMemberwise/11/Andhra Pradesh & AN/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Himachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementMenUpperLimitTeamwise/14/Himachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllAgeDisplacementMenUpperLimitMemberwise/14/Himachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementMenUpperLimitMemberwise/14/Himachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementMenUpperLimitMemberwise/14/Himachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Jammu & Kashmir',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementMenUpperLimitTeamwise/15/Jammu & Kashmir'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementMenUpperLimitMemberwise/15/Jammu & Kashmir/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementMenUpperLimitMemberwise/15/Jammu & Kashmir/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementMenUpperLimitMemberwise/15/Jammu & Kashmir/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Kerala & Lakshadweep',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementMenUpperLimitTeamwise/18/Kerala & Lakshadweep'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementMenUpperLimitMemberwise/18/Kerala & Lakshadweep/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementMenUpperLimitMemberwise/18/Kerala & Lakshadweep/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementMenUpperLimitMemberwise/18/Kerala & Lakshadweep/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementMenUpperLimitTeamwise/19/Maharashtra (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementMenUpperLimitMemberwise/19/Maharashtra (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementMenUpperLimitMemberwise/19/Maharashtra (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementMenUpperLimitMemberwise/19/Maharashtra (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementMenUpperLimitTeamwise/20/Maharashtra (West)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementMenUpperLimitMemberwise/20/Maharashtra (West)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementMenUpperLimitMemberwise/20/Maharashtra (West)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementMenUpperLimitMemberwise/20/Maharashtra (West)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Arunachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementMenUpperLimitTeamwise/22/Arunachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementMenUpperLimitMemberwise/22/Arunachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementMenUpperLimitMemberwise/22/Arunachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementMenUpperLimitMemberwise/22/Arunachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - North & Puducherry',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementMenUpperLimitTeamwise/36/Tamil Nadu - North & Puducherry'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementMenUpperLimitMemberwise/36/Tamil Nadu - North & Puducherry/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementMenUpperLimitMemberwise/36/Tamil Nadu - North & Puducherry/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementMenUpperLimitMemberwise/36/Tamil Nadu - North & Puducherry/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementMenUpperLimitTeamwise/12/Gujarat (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementMenUpperLimitMemberwise/12/Gujarat (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementMenUpperLimitMemberwise/12/Gujarat (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementMenUpperLimitMemberwise/12/Gujarat (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (West) Daman Diu & Dadra Nagar Haweli',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementMenUpperLimitTeamwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementMenUpperLimitMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementMenUpperLimitMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementMenUpperLimitMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementMenUpperLimitTeamwise/28/Rajasthan (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementMenUpperLimitMemberwise/28/Rajasthan (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementMenUpperLimitMemberwise/28/Rajasthan (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementMenUpperLimitMemberwise/28/Rajasthan (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementMenUpperLimitTeamwise/37/Rajasthan (West)'],
                                            items: [
                                                {
                                                    label: 'Team 1',
                                                    routerLink:
                                                    ['getAllAgeDisplacementMenUpperLimitMemberwise/37/Rajasthan (West)/1/Team 1'],
                                                },
                                                {
                                                    label: 'Team 2',
                                                    routerLink:
                                                    ['getAllAgeDisplacementMenUpperLimitMemberwise/37/Rajasthan (West)/2/Team 2'],
                                                },
                                                {
                                                    label: 'Team 3',
                                                    routerLink:
                                                    ['getAllAgeDisplacementMenUpperLimitMemberwise/37/Rajasthan (West)/3/Team 3'],
                                                },
                                            ],
                                    },
                                    {
                                        label: 'Nagaland',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementMenUpperLimitTeamwise/39/Nagaland'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementMenUpperLimitMemberwise/39/Nagaland/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementMenUpperLimitMemberwise/39/Nagaland/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementMenUpperLimitMemberwise/39/Nagaland/3/Team 3'],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },

            {
                status: 'social',
                    items:[
                        {
                        label: 'Age Displacement: Women(Lower Limit)',
                        status: 'social',
                        icon: 'pi pi-bars',
                        items: [
                            {
                                label: 'Age Displacement: Women(Lower Limit)',
                                icon: 'pi pi-bars',
                                routerLink: ['getAllAgeDisplacementWomenLowerLimit'],
                            },
                            {
                                label: 'StateWise',
                                icon: 'pi pi-bars',
                                //
                                items: [
                                    {
                                        label: 'Assam',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllAgeDisplacementWomenLowerLimitTeamwise/1/Assam'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenLowerLimitMemberwise/1/Assam/1/Team 1'
                                                ],
                                            },

                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenLowerLimitMemberwise/1/Assam/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenLowerLimitMemberwise/1/Assam/3/Team 3'
                                                ],
                                            },
                                            {
                                                label: 'Team 4',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenLowerLimitMemberwise/1/Assam/4/Team 4'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (North)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllAgeDisplacementWomenLowerLimitTeamwise/2/Bihar (North)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenLowerLimitMemberwise/2/Bihar (North)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenLowerLimitMemberwise/2/Bihar (North)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenLowerLimitMemberwise/2/Bihar (North)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (South)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllAgeDisplacementWomenLowerLimitTeamwise/3/Bihar (South)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenLowerLimitMemberwise/3/Bihar (South)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenLowerLimitMemberwise/3/Bihar (South)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenLowerLimitMemberwise/3/Bihar (South)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - South',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllAgeDisplacementWomenLowerLimitTeamwise/4/Tamil Nadu - South'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenLowerLimitMemberwise/4/Tamil Nadu - South/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenLowerLimitMemberwise/4/Tamil Nadu - South/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenLowerLimitMemberwise/4/Tamil Nadu - South/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Manipur',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllAgeDisplacementWomenLowerLimitTeamwise/5/Manipur'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenLowerLimitMemberwise/5/Manipur/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenLowerLimitMemberwise/5/Manipur/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenLowerLimitMemberwise/5/Manipur/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Meghalaya',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllAgeDisplacementWomenLowerLimitTeamwise/6/Meghalaya'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenLowerLimitMemberwise/6/Meghalaya/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenLowerLimitMemberwise/6/Meghalaya/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenLowerLimitMemberwise/6/Meghalaya/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Mizoram',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllAgeDisplacementWomenLowerLimitTeamwise/7/Mizoram'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllAgeDisplacementWomenLowerLimitMemberwise/7/Mizoram/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllAgeDisplacementWomenLowerLimitMemberwise/7/Mizoram/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllAgeDisplacementWomenLowerLimitMemberwise/7/Mizoram/1/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Sikkim',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementWomenLowerLimitTeamwise/8/Sikkim'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllAgeDisplacementWomenLowerLimitMemberwise/8/Sikkim/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllAgeDisplacementWomenLowerLimitMemberwise/8/Sikkim/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllAgeDisplacementWomenLowerLimitMemberwise/8/Sikkim/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Andhra Pradesh & AN',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementWomenLowerLimitTeamwise/11/Andhra Pradesh & AN'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllAgeDisplacementWomenLowerLimitMemberwise/11/Andhra Pradesh & AN/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllAgeDisplacementWomenLowerLimitMemberwise/11/Andhra Pradesh & AN/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllAgeDisplacementWomenLowerLimitMemberwise/11/Andhra Pradesh & AN/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Himachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementWomenLowerLimitTeamwise/14/Himachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllAgeDisplacementWomenLowerLimitMemberwise/14/Himachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenLowerLimitMemberwise/14/Himachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenLowerLimitMemberwise/14/Himachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Jammu & Kashmir',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementWomenLowerLimitTeamwise/15/Jammu & Kashmir'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenLowerLimitMemberwise/15/Jammu & Kashmir/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenLowerLimitMemberwise/15/Jammu & Kashmir/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenLowerLimitMemberwise/15/Jammu & Kashmir/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Kerala & Lakshadweep',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementWomenLowerLimitTeamwise/18/Kerala & Lakshadweep'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenLowerLimitMemberwise/18/Kerala & Lakshadweep/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenLowerLimitMemberwise/18/Kerala & Lakshadweep/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenLowerLimitMemberwise/18/Kerala & Lakshadweep/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementWomenLowerLimitTeamwise/19/Maharashtra (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenLowerLimitMemberwise/19/Maharashtra (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenLowerLimitMemberwise/19/Maharashtra (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenLowerLimitMemberwise/19/Maharashtra (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementWomenLowerLimitTeamwise/20/Maharashtra (West)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenLowerLimitMemberwise/20/Maharashtra (West)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenLowerLimitMemberwise/20/Maharashtra (West)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenLowerLimitMemberwise/20/Maharashtra (West)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Arunachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementWomenLowerLimitTeamwise/22/Arunachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenLowerLimitMemberwise/22/Arunachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenLowerLimitMemberwise/22/Arunachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenLowerLimitMemberwise/22/Arunachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - North & Puducherry',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementWomenLowerLimitTeamwise/36/Tamil Nadu - North & Puducherry'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenLowerLimitMemberwise/36/Tamil Nadu - North & Puducherry/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenLowerLimitMemberwise/36/Tamil Nadu - North & Puducherry/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenLowerLimitMemberwise/36/Tamil Nadu - North & Puducherry/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementWomenLowerLimitTeamwise/12/Gujarat (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenLowerLimitMemberwise/12/Gujarat (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenLowerLimitMemberwise/12/Gujarat (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenLowerLimitMemberwise/12/Gujarat (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (West) Daman Diu & Dadra Nagar Haweli',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementWomenLowerLimitTeamwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenLowerLimitMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenLowerLimitMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenLowerLimitMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementWomenLowerLimitTeamwise/28/Rajasthan (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenLowerLimitMemberwise/28/Rajasthan (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenLowerLimitMemberwise/28/Rajasthan (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenLowerLimitMemberwise/28/Rajasthan (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementWomenLowerLimitTeamwise/37/Rajasthan (West)'],
                                            items: [
                                                {
                                                    label: 'Team 1',
                                                    routerLink:
                                                    ['getAllAgeDisplacementWomenLowerLimitMemberwise/37/Rajasthan (West)/1/Team 1'],
                                                },
                                                {
                                                    label: 'Team 2',
                                                    routerLink:
                                                    ['getAllAgeDisplacementWomenLowerLimitMemberwise/37/Rajasthan (West)/2/Team 2'],
                                                },
                                                {
                                                    label: 'Team 3',
                                                    routerLink:
                                                    ['getAllAgeDisplacementWomenLowerLimitMemberwise/37/Rajasthan (West)/3/Team 3'],
                                                },
                                            ],
                                    },
                                    {
                                        label: 'Nagaland',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementWomenLowerLimitTeamwise/39/Nagaland'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenLowerLimitMemberwise/39/Nagaland/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenLowerLimitMemberwise/39/Nagaland/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenLowerLimitMemberwise/39/Nagaland/3/Team 3'],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },


             {
                status: 'social',
                items:[
                        {
                        label: 'Age Displacement: Women(Upper Limit)',
                        status: 'social',
                        icon: 'pi pi-bars',
                        items: [
                            {
                                label: 'Age Displacement: Women(Upper Limit)',
                                icon: 'pi pi-bars',
                                routerLink: ['getAllAgeDisplacementWomenUpperLimit'],
                            },
                            {
                                label: 'StateWise',
                                icon: 'pi pi-bars',
                                //
                                items: [
                                    {
                                        label: 'Assam',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllAgeDisplacementWomenUpperLimitTeamwise/1/Assam'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenUpperLimitMemberwise/1/Assam/1/Team 1'
                                                ],
                                            },

                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenUpperLimitMemberwise/1/Assam/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenUpperLimitMemberwise/1/Assam/3/Team 3'
                                                ],
                                            },
                                            {
                                                label: 'Team 4',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenUpperLimitMemberwise/1/Assam/4/Team 4'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (North)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllAgeDisplacementWomenUpperLimitTeamwise/2/Bihar (North)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenUpperLimitMemberwise/2/Bihar (North)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenUpperLimitMemberwise/2/Bihar (North)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenUpperLimitMemberwise/2/Bihar (North)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (South)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllAgeDisplacementWomenUpperLimitTeamwise/3/Bihar (South)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenUpperLimitMemberwise/3/Bihar (South)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenUpperLimitMemberwise/3/Bihar (South)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenUpperLimitMemberwise/3/Bihar (South)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - South',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllAgeDisplacementWomenUpperLimitTeamwise/4/Tamil Nadu - South'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenUpperLimitMemberwise/4/Tamil Nadu - South/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenUpperLimitMemberwise/4/Tamil Nadu - South/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenUpperLimitMemberwise/4/Tamil Nadu - South/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Manipur',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllAgeDisplacementWomenUpperLimitTeamwise/5/Manipur'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenUpperLimitMemberwise/5/Manipur/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenUpperLimitMemberwise/5/Manipur/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenUpperLimitMemberwise/5/Manipur/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Meghalaya',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllAgeDisplacementWomenUpperLimitTeamwise/6/Meghalaya'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenUpperLimitMemberwise/6/Meghalaya/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenUpperLimitMemberwise/6/Meghalaya/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllAgeDisplacementWomenUpperLimitMemberwise/6/Meghalaya/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Mizoram',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllAgeDisplacementWomenUpperLimitTeamwise/7/Mizoram'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllAgeDisplacementWomenUpperLimitMemberwise/7/Mizoram/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllAgeDisplacementWomenUpperLimitMemberwise/7/Mizoram/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllAgeDisplacementWomenUpperLimitMemberwise/7/Mizoram/1/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Sikkim',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementWomenUpperLimitTeamwise/8/Sikkim'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllAgeDisplacementWomenUpperLimitMemberwise/8/Sikkim/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllAgeDisplacementWomenUpperLimitMemberwise/8/Sikkim/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllAgeDisplacementWomenUpperLimitMemberwise/8/Sikkim/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Andhra Pradesh & AN',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementWomenUpperLimitTeamwise/11/Andhra Pradesh & AN'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllAgeDisplacementWomenUpperLimitMemberwise/11/Andhra Pradesh & AN/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllAgeDisplacementWomenUpperLimitMemberwise/11/Andhra Pradesh & AN/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllAgeDisplacementWomenUpperLimitMemberwise/11/Andhra Pradesh & AN/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Himachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementWomenUpperLimitTeamwise/14/Himachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllAgeDisplacementWomenUpperLimitMemberwise/14/Himachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenUpperLimitMemberwise/14/Himachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenUpperLimitMemberwise/14/Himachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Jammu & Kashmir',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementWomenUpperLimitTeamwise/15/Jammu & Kashmir'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenUpperLimitMemberwise/15/Jammu & Kashmir/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenUpperLimitMemberwise/15/Jammu & Kashmir/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenUpperLimitMemberwise/15/Jammu & Kashmir/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Kerala & Lakshadweep',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementWomenUpperLimitTeamwise/18/Kerala & Lakshadweep'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenUpperLimitMemberwise/18/Kerala & Lakshadweep/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenUpperLimitMemberwise/18/Kerala & Lakshadweep/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenUpperLimitMemberwise/18/Kerala & Lakshadweep/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementWomenUpperLimitTeamwise/19/Maharashtra (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenUpperLimitMemberwise/19/Maharashtra (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenUpperLimitMemberwise/19/Maharashtra (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenUpperLimitMemberwise/19/Maharashtra (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementWomenUpperLimitTeamwise/20/Maharashtra (West)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenUpperLimitMemberwise/20/Maharashtra (West)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenUpperLimitMemberwise/20/Maharashtra (West)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenUpperLimitMemberwise/20/Maharashtra (West)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Arunachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementWomenUpperLimitTeamwise/22/Arunachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenUpperLimitMemberwise/22/Arunachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenUpperLimitMemberwise/22/Arunachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenUpperLimitMemberwise/22/Arunachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - North & Puducherry',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementWomenUpperLimitTeamwise/36/Tamil Nadu - North & Puducherry'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenUpperLimitMemberwise/36/Tamil Nadu - North & Puducherry/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenUpperLimitMemberwise/36/Tamil Nadu - North & Puducherry/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenUpperLimitMemberwise/36/Tamil Nadu - North & Puducherry/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementWomenUpperLimitTeamwise/12/Gujarat (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenUpperLimitMemberwise/12/Gujarat (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenUpperLimitMemberwise/12/Gujarat (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenUpperLimitMemberwise/12/Gujarat (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (West) Daman Diu & Dadra Nagar Haweli',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementWomenUpperLimitTeamwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenUpperLimitMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenUpperLimitMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenUpperLimitMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementWomenUpperLimitTeamwise/28/Rajasthan (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenUpperLimitMemberwise/28/Rajasthan (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenUpperLimitMemberwise/28/Rajasthan (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenUpperLimitMemberwise/28/Rajasthan (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementWomenUpperLimitTeamwise/37/Rajasthan (West)'],
                                            items: [
                                                {
                                                    label: 'Team 1',
                                                    routerLink:
                                                    ['getAllAgeDisplacementWomenUpperLimitMemberwise/37/Rajasthan (West)/1/Team 1'],
                                                },
                                                {
                                                    label: 'Team 2',
                                                    routerLink:
                                                    ['getAllAgeDisplacementWomenUpperLimitMemberwise/37/Rajasthan (West)/2/Team 2'],
                                                },
                                                {
                                                    label: 'Team 3',
                                                    routerLink:
                                                    ['getAllAgeDisplacementWomenUpperLimitMemberwise/37/Rajasthan (West)/3/Team 3'],
                                                },
                                            ],
                                    },
                                    {
                                        label: 'Nagaland',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllAgeDisplacementWomenUpperLimitTeamwise/39/Nagaland'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenUpperLimitMemberwise/39/Nagaland/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenUpperLimitMemberwise/39/Nagaland/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllAgeDisplacementWomenUpperLimitMemberwise/39/Nagaland/3/Team 3'],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },

                    ////////////////////////////////////////////////////////////////////

                {
                    status: 'social',
                    items:[
                        {
                        label: 'Eligible Women Response Rate',
                        

                        icon: 'pi pi-bars',
                        items: [
                            {
                                label: 'Eligible Women Response Rate',
                                icon: 'pi pi-bars',
                                routerLink: ['getAllEligibleWomenResponseRate'],
                            },
                            {
                                label: 'StateWise',
                                icon: 'pi pi-bars',
                                //
                                items: [
                                    {
                                        label: 'Assam',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllEligibleWomenResponseRateTeamwise/1/Assam'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenResponseRateMemberwise/1/Assam/1/Team 1'
                                                ],
                                            },

                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenResponseRateMemberwise/1/Assam/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenResponseRateMemberwise/1/Assam/3/Team 3'
                                                ],
                                            },
                                            {
                                                label: 'Team 4',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenResponseRateMemberwise/1/Assam/4/Team 4'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (North)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllEligibleWomenResponseRateTeamwise/2/Bihar (North)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenResponseRateMemberwise/2/Bihar (North)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenResponseRateMemberwise/2/Bihar (North)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenResponseRateMemberwise/2/Bihar (North)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (South)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllEligibleWomenResponseRateTeamwise/3/Bihar (South)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenResponseRateMemberwise/3/Bihar (South)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenResponseRateMemberwise/3/Bihar (South)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenResponseRateMemberwise/3/Bihar (South)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - South',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllEligibleWomenResponseRateTeamwise/4/Tamil Nadu - South'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenResponseRateMemberwise/4/Tamil Nadu - South/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenResponseRateMemberwise/4/Tamil Nadu - South/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenResponseRateMemberwise/4/Tamil Nadu - South/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Manipur',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllEligibleWomenResponseRateTeamwise/5/Manipur'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenResponseRateMemberwise/5/Manipur/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenResponseRateMemberwise/5/Manipur/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenResponseRateMemberwise/5/Manipur/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Meghalaya',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllEligibleWomenResponseRateTeamwise/6/Meghalaya'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenResponseRateMemberwise/6/Meghalaya/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenResponseRateMemberwise/6/Meghalaya/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleWomenResponseRateMemberwise/6/Meghalaya/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Mizoram',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllEligibleWomenResponseRateTeamwise/7/Mizoram'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllEligibleWomenResponseRateMemberwise/7/Mizoram/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllEligibleWomenResponseRateMemberwise/7/Mizoram/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllEligibleWomenResponseRateMemberwise/7/Mizoram/1/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Sikkim',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleWomenResponseRateTeamwise/8/Sikkim'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllEligibleWomenResponseRateMemberwise/8/Sikkim/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllEligibleWomenResponseRateMemberwise/8/Sikkim/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllEligibleWomenResponseRateMemberwise/8/Sikkim/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Andhra Pradesh & AN',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleWomenResponseRateTeamwise/11/Andhra Pradesh & AN'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllEligibleWomenResponseRateMemberwise/11/Andhra Pradesh & AN/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllEligibleWomenResponseRateMemberwise/11/Andhra Pradesh & AN/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllEligibleWomenResponseRateMemberwise/11/Andhra Pradesh & AN/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Himachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleWomenResponseRateTeamwise/14/Himachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllEligibleWomenResponseRateMemberwise/14/Himachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleWomenResponseRateMemberwise/14/Himachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleWomenResponseRateMemberwise/14/Himachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Jammu & Kashmir',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleWomenResponseRateTeamwise/15/Jammu & Kashmir'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleWomenResponseRateMemberwise/15/Jammu & Kashmir/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleWomenResponseRateMemberwise/15/Jammu & Kashmir/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleWomenResponseRateMemberwise/15/Jammu & Kashmir/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Kerala & Lakshadweep',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleWomenResponseRateTeamwise/18/Kerala & Lakshadweep'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleWomenResponseRateMemberwise/18/Kerala & Lakshadweep/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleWomenResponseRateMemberwise/18/Kerala & Lakshadweep/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleWomenResponseRateMemberwise/18/Kerala & Lakshadweep/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleWomenResponseRateTeamwise/19/Maharashtra (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleWomenResponseRateMemberwise/19/Maharashtra (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleWomenResponseRateMemberwise/19/Maharashtra (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleWomenResponseRateMemberwise/19/Maharashtra (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleWomenResponseRateTeamwise/20/Maharashtra (West)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleWomenResponseRateMemberwise/20/Maharashtra (West)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleWomenResponseRateMemberwise/20/Maharashtra (West)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleWomenResponseRateMemberwise/20/Maharashtra (West)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Arunachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleWomenResponseRateTeamwise/22/Arunachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleWomenResponseRateMemberwise/22/Arunachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleWomenResponseRateMemberwise/22/Arunachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleWomenResponseRateMemberwise/22/Arunachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - North & Puducherry',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleWomenResponseRateTeamwise/36/Tamil Nadu - North & Puducherry'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleWomenResponseRateMemberwise/36/Tamil Nadu - North & Puducherry/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleWomenResponseRateMemberwise/36/Tamil Nadu - North & Puducherry/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleWomenResponseRateMemberwise/36/Tamil Nadu - North & Puducherry/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleWomenResponseRateTeamwise/12/Gujarat (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleWomenResponseRateMemberwise/12/Gujarat (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleWomenResponseRateMemberwise/12/Gujarat (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleWomenResponseRateMemberwise/12/Gujarat (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (West) Daman Diu & Dadra Nagar Haweli',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleWomenResponseRateTeamwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleWomenResponseRateMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleWomenResponseRateMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleWomenResponseRateMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleWomenResponseRateTeamwise/28/Rajasthan (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleWomenResponseRateMemberwise/28/Rajasthan (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleWomenResponseRateMemberwise/28/Rajasthan (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleWomenResponseRateMemberwise/28/Rajasthan (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleWomenResponseRateTeamwise/37/Rajasthan (West)'],
                                            items: [
                                                {
                                                    label: 'Team 1',
                                                    routerLink:
                                                    ['getAllEligibleWomenResponseRateMemberwise/37/Rajasthan (West)/1/Team 1'],
                                                },
                                                {
                                                    label: 'Team 2',
                                                    routerLink:
                                                    ['getAllEligibleWomenResponseRateMemberwise/37/Rajasthan (West)/2/Team 2'],
                                                },
                                                {
                                                    label: 'Team 3',
                                                    routerLink:
                                                    ['getAllEligibleWomenResponseRateMemberwise/37/Rajasthan (West)/3/Team 3'],
                                                },
                                            ],
                                    },
                                    {
                                        label: 'Nagaland',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleWomenResponseRateTeamwise/39/Nagaland'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleWomenResponseRateMemberwise/39/Nagaland/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleWomenResponseRateMemberwise/39/Nagaland/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleWomenResponseRateMemberwise/39/Nagaland/3/Team 3'],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },

                    /////////////////////////////////

                {
                    status: 'social',
                    items:[
                        {
                        label: 'Eligible Man Response Rate',
                        
                        icon: 'pi pi-bars',
                        items: [
                            {
                                label: 'Eligible Man Response Rate',
                                icon: 'pi pi-bars',
                                routerLink: ['getAllEligibleManResponseRate'],
                            },
                            {
                                label: 'StateWise',
                                icon: 'pi pi-bars',
                                //
                                items: [
                                    {
                                        label: 'Assam',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllEligibleManResponseRateTeamwise/1/Assam'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleManResponseRateMemberwise/1/Assam/1/Team 1'
                                                ],
                                            },

                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleManResponseRateMemberwise/1/Assam/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleManResponseRateMemberwise/1/Assam/3/Team 3'
                                                ],
                                            },
                                            {
                                                label: 'Team 4',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleManResponseRateMemberwise/1/Assam/4/Team 4'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (North)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllEligibleManResponseRateTeamwise/2/Bihar (North)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleManResponseRateMemberwise/2/Bihar (North)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleManResponseRateMemberwise/2/Bihar (North)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleManResponseRateMemberwise/2/Bihar (North)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (South)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllEligibleManResponseRateTeamwise/3/Bihar (South)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleManResponseRateMemberwise/3/Bihar (South)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleManResponseRateMemberwise/3/Bihar (South)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleManResponseRateMemberwise/3/Bihar (South)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - South',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllEligibleManResponseRateTeamwise/4/Tamil Nadu - South'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleManResponseRateMemberwise/4/Tamil Nadu - South/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleManResponseRateMemberwise/4/Tamil Nadu - South/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleManResponseRateMemberwise/4/Tamil Nadu - South/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Manipur',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllEligibleManResponseRateTeamwise/5/Manipur'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleManResponseRateMemberwise/5/Manipur/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleManResponseRateMemberwise/5/Manipur/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleManResponseRateMemberwise/5/Manipur/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Meghalaya',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllEligibleManResponseRateTeamwise/6/Meghalaya'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleManResponseRateMemberwise/6/Meghalaya/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleManResponseRateMemberwise/6/Meghalaya/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllEligibleManResponseRateMemberwise/6/Meghalaya/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Mizoram',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllEligibleManResponseRateTeamwise/7/Mizoram'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllEligibleManResponseRateMemberwise/7/Mizoram/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllEligibleManResponseRateMemberwise/7/Mizoram/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllEligibleManResponseRateMemberwise/7/Mizoram/1/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Sikkim',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleManResponseRateTeamwise/8/Sikkim'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllEligibleManResponseRateMemberwise/8/Sikkim/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllEligibleManResponseRateMemberwise/8/Sikkim/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllEligibleManResponseRateMemberwise/8/Sikkim/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Andhra Pradesh & AN',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleManResponseRateTeamwise/11/Andhra Pradesh & AN'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllEligibleManResponseRateMemberwise/11/Andhra Pradesh & AN/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllEligibleManResponseRateMemberwise/11/Andhra Pradesh & AN/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllEligibleManResponseRateMemberwise/11/Andhra Pradesh & AN/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Himachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleManResponseRateTeamwise/14/Himachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllEligibleManResponseRateMemberwise/14/Himachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleManResponseRateMemberwise/14/Himachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleManResponseRateMemberwise/14/Himachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Jammu & Kashmir',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleManResponseRateTeamwise/15/Jammu & Kashmir'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleManResponseRateMemberwise/15/Jammu & Kashmir/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleManResponseRateMemberwise/15/Jammu & Kashmir/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleManResponseRateMemberwise/15/Jammu & Kashmir/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Kerala & Lakshadweep',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleManResponseRateTeamwise/18/Kerala & Lakshadweep'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleManResponseRateMemberwise/18/Kerala & Lakshadweep/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleManResponseRateMemberwise/18/Kerala & Lakshadweep/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleManResponseRateMemberwise/18/Kerala & Lakshadweep/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleManResponseRateTeamwise/19/Maharashtra (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleManResponseRateMemberwise/19/Maharashtra (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleManResponseRateMemberwise/19/Maharashtra (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleManResponseRateMemberwise/19/Maharashtra (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleManResponseRateTeamwise/20/Maharashtra (West)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleManResponseRateMemberwise/20/Maharashtra (West)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleManResponseRateMemberwise/20/Maharashtra (West)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleManResponseRateMemberwise/20/Maharashtra (West)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Arunachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleManResponseRateTeamwise/22/Arunachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleManResponseRateMemberwise/22/Arunachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleManResponseRateMemberwise/22/Arunachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleManResponseRateMemberwise/22/Arunachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - North & Puducherry',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleManResponseRateTeamwise/36/Tamil Nadu - North & Puducherry'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleManResponseRateMemberwise/36/Tamil Nadu - North & Puducherry/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleManResponseRateMemberwise/36/Tamil Nadu - North & Puducherry/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleManResponseRateMemberwise/36/Tamil Nadu - North & Puducherry/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleManResponseRateTeamwise/12/Gujarat (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleManResponseRateMemberwise/12/Gujarat (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleManResponseRateMemberwise/12/Gujarat (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleManResponseRateMemberwise/12/Gujarat (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (West) Daman Diu & Dadra Nagar Haweli',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleManResponseRateTeamwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleManResponseRateMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleManResponseRateMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleManResponseRateMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleManResponseRateTeamwise/28/Rajasthan (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleManResponseRateMemberwise/28/Rajasthan (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleManResponseRateMemberwise/28/Rajasthan (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleManResponseRateMemberwise/28/Rajasthan (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleManResponseRateTeamwise/37/Rajasthan (West)'],
                                            items: [
                                                {
                                                    label: 'Team 1',
                                                    routerLink:
                                                    ['getAllEligibleManResponseRateMemberwise/37/Rajasthan (West)/1/Team 1'],
                                                },
                                                {
                                                    label: 'Team 2',
                                                    routerLink:
                                                    ['getAllEligibleManResponseRateMemberwise/37/Rajasthan (West)/2/Team 2'],
                                                },
                                                {
                                                    label: 'Team 3',
                                                    routerLink:
                                                    ['getAllEligibleManResponseRateMemberwise/37/Rajasthan (West)/3/Team 3'],
                                                },
                                            ],
                                    },
                                    {
                                        label: 'Nagaland',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllEligibleManResponseRateTeamwise/39/Nagaland'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllEligibleManResponseRateMemberwise/39/Nagaland/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllEligibleManResponseRateMemberwise/39/Nagaland/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllEligibleManResponseRateMemberwise/39/Nagaland/3/Team 3'],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },

                    /////////////////////////////////

                {
                    status: 'social',
                    items:[
                        {
                        label: 'Eligible Women 15-49 visits',
                        
                        icon: 'pi pi-bars',
                        items: [
                            {
                                label: 'Eligible Women 15-49 visits',
                                icon: 'pi pi-bars',
                                routerLink: ['getAllWomenVisit1549Visits'],
                            },
                            {
                                label: 'StateWise',
                                icon: 'pi pi-bars',
                                //
                                items: [
                                    {
                                        label: 'Assam',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllWomenVisit1549VisitsTeamwise/1/Assam'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllWomenVisit1549VisitsMemberwise/1/Assam/1/Team 1'
                                                ],
                                            },

                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllWomenVisit1549VisitsMemberwise/1/Assam/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllWomenVisit1549VisitsMemberwise/1/Assam/3/Team 3'
                                                ],
                                            },
                                            {
                                                label: 'Team 4',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllWomenVisit1549VisitsMemberwise/1/Assam/4/Team 4'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (North)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllWomenVisit1549VisitsTeamwise/2/Bihar (North)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllWomenVisit1549VisitsMemberwise/2/Bihar (North)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllWomenVisit1549VisitsMemberwise/2/Bihar (North)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllWomenVisit1549VisitsMemberwise/2/Bihar (North)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (South)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllWomenVisit1549VisitsTeamwise/3/Bihar (South)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllWomenVisit1549VisitsMemberwise/3/Bihar (South)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllWomenVisit1549VisitsMemberwise/3/Bihar (South)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllWomenVisit1549VisitsMemberwise/3/Bihar (South)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - South',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllWomenVisit1549VisitsTeamwise/4/Tamil Nadu - South'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllWomenVisit1549VisitsMemberwise/4/Tamil Nadu - South/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllWomenVisit1549VisitsMemberwise/4/Tamil Nadu - South/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllWomenVisit1549VisitsMemberwise/4/Tamil Nadu - South/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Manipur',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllWomenVisit1549VisitsTeamwise/5/Manipur'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllWomenVisit1549VisitsMemberwise/5/Manipur/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllWomenVisit1549VisitsMemberwise/5/Manipur/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllWomenVisit1549VisitsMemberwise/5/Manipur/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Meghalaya',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllWomenVisit1549VisitsTeamwise/6/Meghalaya'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllWomenVisit1549VisitsMemberwise/6/Meghalaya/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllWomenVisit1549VisitsMemberwise/6/Meghalaya/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllWomenVisit1549VisitsMemberwise/6/Meghalaya/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Mizoram',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllWomenVisit1549VisitsTeamwise/7/Mizoram'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllWomenVisit1549VisitsMemberwise/7/Mizoram/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllWomenVisit1549VisitsMemberwise/7/Mizoram/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllWomenVisit1549VisitsMemberwise/7/Mizoram/1/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Sikkim',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllWomenVisit1549VisitsTeamwise/8/Sikkim'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllWomenVisit1549VisitsMemberwise/8/Sikkim/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllWomenVisit1549VisitsMemberwise/8/Sikkim/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllWomenVisit1549VisitsMemberwise/8/Sikkim/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Andhra Pradesh & AN',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllWomenVisit1549VisitsTeamwise/11/Andhra Pradesh & AN'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllWomenVisit1549VisitsMemberwise/11/Andhra Pradesh & AN/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllWomenVisit1549VisitsMemberwise/11/Andhra Pradesh & AN/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllWomenVisit1549VisitsMemberwise/11/Andhra Pradesh & AN/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Himachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllWomenVisit1549VisitsTeamwise/14/Himachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllWomenVisit1549VisitsMemberwise/14/Himachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllWomenVisit1549VisitsMemberwise/14/Himachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllWomenVisit1549VisitsMemberwise/14/Himachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Jammu & Kashmir',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllWomenVisit1549VisitsTeamwise/15/Jammu & Kashmir'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllWomenVisit1549VisitsMemberwise/15/Jammu & Kashmir/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllWomenVisit1549VisitsMemberwise/15/Jammu & Kashmir/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllWomenVisit1549VisitsMemberwise/15/Jammu & Kashmir/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Kerala & Lakshadweep',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllWomenVisit1549VisitsTeamwise/18/Kerala & Lakshadweep'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllWomenVisit1549VisitsMemberwise/18/Kerala & Lakshadweep/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllWomenVisit1549VisitsMemberwise/18/Kerala & Lakshadweep/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllWomenVisit1549VisitsMemberwise/18/Kerala & Lakshadweep/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllWomenVisit1549VisitsTeamwise/19/Maharashtra (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllWomenVisit1549VisitsMemberwise/19/Maharashtra (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllWomenVisit1549VisitsMemberwise/19/Maharashtra (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllWomenVisit1549VisitsMemberwise/19/Maharashtra (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllWomenVisit1549VisitsTeamwise/20/Maharashtra (West)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllWomenVisit1549VisitsMemberwise/20/Maharashtra (West)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllWomenVisit1549VisitsMemberwise/20/Maharashtra (West)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllWomenVisit1549VisitsMemberwise/20/Maharashtra (West)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Arunachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllWomenVisit1549VisitsTeamwise/22/Arunachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllWomenVisit1549VisitsMemberwise/22/Arunachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllWomenVisit1549VisitsMemberwise/22/Arunachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllWomenVisit1549VisitsMemberwise/22/Arunachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - North & Puducherry',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllWomenVisit1549VisitsTeamwise/36/Tamil Nadu - North & Puducherry'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllWomenVisit1549VisitsMemberwise/36/Tamil Nadu - North & Puducherry/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllWomenVisit1549VisitsMemberwise/36/Tamil Nadu - North & Puducherry/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllWomenVisit1549VisitsMemberwise/36/Tamil Nadu - North & Puducherry/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllWomenVisit1549VisitsTeamwise/12/Gujarat (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllWomenVisit1549VisitsMemberwise/12/Gujarat (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllWomenVisit1549VisitsMemberwise/12/Gujarat (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllWomenVisit1549VisitsMemberwise/12/Gujarat (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (West) Daman Diu & Dadra Nagar Haweli',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllWomenVisit1549VisitsTeamwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllWomenVisit1549VisitsMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllWomenVisit1549VisitsMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllWomenVisit1549VisitsMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllWomenVisit1549VisitsTeamwise/28/Rajasthan (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllWomenVisit1549VisitsMemberwise/28/Rajasthan (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllWomenVisit1549VisitsMemberwise/28/Rajasthan (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllWomenVisit1549VisitsMemberwise/28/Rajasthan (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllWomenVisit1549VisitsTeamwise/37/Rajasthan (West)'],
                                            items: [
                                                {
                                                    label: 'Team 1',
                                                    routerLink:
                                                    ['getAllWomenVisit1549VisitsMemberwise/37/Rajasthan (West)/1/Team 1'],
                                                },
                                                {
                                                    label: 'Team 2',
                                                    routerLink:
                                                    ['getAllWomenVisit1549VisitsMemberwise/37/Rajasthan (West)/2/Team 2'],
                                                },
                                                {
                                                    label: 'Team 3',
                                                    routerLink:
                                                    ['getAllWomenVisit1549VisitsMemberwise/37/Rajasthan (West)/3/Team 3'],
                                                },
                                            ],
                                    },
                                    {
                                        label: 'Nagaland',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllWomenVisit1549VisitsTeamwise/39/Nagaland'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllWomenVisit1549VisitsMemberwise/39/Nagaland/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllWomenVisit1549VisitsMemberwise/39/Nagaland/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllWomenVisit1549VisitsMemberwise/39/Nagaland/3/Team 3'],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },

                    /////////////////////////////////

                 {
                    status: 'social',
                    items:[
                        {
                        label: 'Eligible Men 15-54 visits',
                        
                        icon: 'pi pi-bars',
                        items: [
                            {
                                label: 'Eligible Men 15-54 visits',
                                icon: 'pi pi-bars',
                                routerLink: ['getAllMenVisit1554Visits'],
                            },
                            {
                                label: 'StateWise',
                                icon: 'pi pi-bars',
                                //
                                items: [
                                    {
                                        label: 'Assam',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllMenVisit1554VisitsTeamwise/1/Assam'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllMenVisit1554VisitsMemberwise/1/Assam/1/Team 1'
                                                ],
                                            },

                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllMenVisit1554VisitsMemberwise/1/Assam/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllMenVisit1554VisitsMemberwise/1/Assam/3/Team 3'
                                                ],
                                            },
                                            {
                                                label: 'Team 4',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllMenVisit1554VisitsMemberwise/1/Assam/4/Team 4'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (North)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllMenVisit1554VisitsTeamwise/2/Bihar (North)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllMenVisit1554VisitsMemberwise/2/Bihar (North)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllMenVisit1554VisitsMemberwise/2/Bihar (North)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllMenVisit1554VisitsMemberwise/2/Bihar (North)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (South)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllMenVisit1554VisitsTeamwise/3/Bihar (South)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllMenVisit1554VisitsMemberwise/3/Bihar (South)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllMenVisit1554VisitsMemberwise/3/Bihar (South)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllMenVisit1554VisitsMemberwise/3/Bihar (South)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - South',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllMenVisit1554VisitsTeamwise/4/Tamil Nadu - South'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllMenVisit1554VisitsMemberwise/4/Tamil Nadu - South/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllMenVisit1554VisitsMemberwise/4/Tamil Nadu - South/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllMenVisit1554VisitsMemberwise/4/Tamil Nadu - South/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Manipur',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllMenVisit1554VisitsTeamwise/5/Manipur'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllMenVisit1554VisitsMemberwise/5/Manipur/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllMenVisit1554VisitsMemberwise/5/Manipur/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllMenVisit1554VisitsMemberwise/5/Manipur/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Meghalaya',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllMenVisit1554VisitsTeamwise/6/Meghalaya'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllMenVisit1554VisitsMemberwise/6/Meghalaya/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllMenVisit1554VisitsMemberwise/6/Meghalaya/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllMenVisit1554VisitsMemberwise/6/Meghalaya/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Mizoram',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllMenVisit1554VisitsTeamwise/7/Mizoram'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllMenVisit1554VisitsMemberwise/7/Mizoram/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllMenVisit1554VisitsMemberwise/7/Mizoram/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllMenVisit1554VisitsMemberwise/7/Mizoram/1/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Sikkim',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllMenVisit1554VisitsTeamwise/8/Sikkim'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllMenVisit1554VisitsMemberwise/8/Sikkim/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllMenVisit1554VisitsMemberwise/8/Sikkim/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllMenVisit1554VisitsMemberwise/8/Sikkim/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Andhra Pradesh & AN',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllMenVisit1554VisitsTeamwise/11/Andhra Pradesh & AN'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllMenVisit1554VisitsMemberwise/11/Andhra Pradesh & AN/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllMenVisit1554VisitsMemberwise/11/Andhra Pradesh & AN/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllMenVisit1554VisitsMemberwise/11/Andhra Pradesh & AN/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Himachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllMenVisit1554VisitsTeamwise/14/Himachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllMenVisit1554VisitsMemberwise/14/Himachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllMenVisit1554VisitsMemberwise/14/Himachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllMenVisit1554VisitsMemberwise/14/Himachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Jammu & Kashmir',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllMenVisit1554VisitsTeamwise/15/Jammu & Kashmir'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllMenVisit1554VisitsMemberwise/15/Jammu & Kashmir/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllMenVisit1554VisitsMemberwise/15/Jammu & Kashmir/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllMenVisit1554VisitsMemberwise/15/Jammu & Kashmir/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Kerala & Lakshadweep',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllMenVisit1554VisitsTeamwise/18/Kerala & Lakshadweep'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllMenVisit1554VisitsMemberwise/18/Kerala & Lakshadweep/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllMenVisit1554VisitsMemberwise/18/Kerala & Lakshadweep/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllMenVisit1554VisitsMemberwise/18/Kerala & Lakshadweep/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllMenVisit1554VisitsTeamwise/19/Maharashtra (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllMenVisit1554VisitsMemberwise/19/Maharashtra (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllMenVisit1554VisitsMemberwise/19/Maharashtra (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllMenVisit1554VisitsMemberwise/19/Maharashtra (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllMenVisit1554VisitsTeamwise/20/Maharashtra (West)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllMenVisit1554VisitsMemberwise/20/Maharashtra (West)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllMenVisit1554VisitsMemberwise/20/Maharashtra (West)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllMenVisit1554VisitsMemberwise/20/Maharashtra (West)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Arunachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllMenVisit1554VisitsTeamwise/22/Arunachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllMenVisit1554VisitsMemberwise/22/Arunachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllMenVisit1554VisitsMemberwise/22/Arunachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllMenVisit1554VisitsMemberwise/22/Arunachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - North & Puducherry',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllMenVisit1554VisitsTeamwise/36/Tamil Nadu - North & Puducherry'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllMenVisit1554VisitsMemberwise/36/Tamil Nadu - North & Puducherry/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllMenVisit1554VisitsMemberwise/36/Tamil Nadu - North & Puducherry/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllMenVisit1554VisitsMemberwise/36/Tamil Nadu - North & Puducherry/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllMenVisit1554VisitsTeamwise/12/Gujarat (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllMenVisit1554VisitsMemberwise/12/Gujarat (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllMenVisit1554VisitsMemberwise/12/Gujarat (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllMenVisit1554VisitsMemberwise/12/Gujarat (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (West) Daman Diu & Dadra Nagar Haweli',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllMenVisit1554VisitsTeamwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllMenVisit1554VisitsMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllMenVisit1554VisitsMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllMenVisit1554VisitsMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllMenVisit1554VisitsTeamwise/28/Rajasthan (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllMenVisit1554VisitsMemberwise/28/Rajasthan (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllMenVisit1554VisitsMemberwise/28/Rajasthan (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllMenVisit1554VisitsMemberwise/28/Rajasthan (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllMenVisit1554VisitsTeamwise/37/Rajasthan (West)'],
                                            items: [
                                                {
                                                    label: 'Team 1',
                                                    routerLink:
                                                    ['getAllMenVisit1554VisitsMemberwise/37/Rajasthan (West)/1/Team 1'],
                                                },
                                                {
                                                    label: 'Team 2',
                                                    routerLink:
                                                    ['getAllMenVisit1554VisitsMemberwise/37/Rajasthan (West)/2/Team 2'],
                                                },
                                                {
                                                    label: 'Team 3',
                                                    routerLink:
                                                    ['getAllMenVisit1554VisitsMemberwise/37/Rajasthan (West)/3/Team 3'],
                                                },
                                            ],
                                    },
                                    {
                                        label: 'Nagaland',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllMenVisit1554VisitsTeamwise/39/Nagaland'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllMenVisit1554VisitsMemberwise/39/Nagaland/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllMenVisit1554VisitsMemberwise/39/Nagaland/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllMenVisit1554VisitsMemberwise/39/Nagaland/3/Team 3'],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },

                    ////////////////////////////////////////

                {
                    status: 'additional',
                    items:[
                        {
                        label: 'Household Relations Modules',
                        
                        icon: 'pi pi-bars',
                        items: [
                            {
                                label: 'Household Relations Modules',
                                icon: 'pi pi-bars',
                                routerLink: ['getAllHouseholdRelationsModules'],
                            },
                            {
                                label: 'StateWise',
                                icon: 'pi pi-bars',
                                //
                                items: [
                                    {
                                        label: 'Assam',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllHouseholdRelationsModulesTeamwise/1/Assam'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHouseholdRelationsModulesMemberwise/1/Assam/1/Team 1'
                                                ],
                                            },

                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHouseholdRelationsModulesMemberwise/1/Assam/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHouseholdRelationsModulesMemberwise/1/Assam/3/Team 3'
                                                ],
                                            },
                                            {
                                                label: 'Team 4',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHouseholdRelationsModulesMemberwise/1/Assam/4/Team 4'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (North)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllHouseholdRelationsModulesTeamwise/2/Bihar (North)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHouseholdRelationsModulesMemberwise/2/Bihar (North)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHouseholdRelationsModulesMemberwise/2/Bihar (North)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHouseholdRelationsModulesMemberwise/2/Bihar (North)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (South)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllHouseholdRelationsModulesTeamwise/3/Bihar (South)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHouseholdRelationsModulesMemberwise/3/Bihar (South)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHouseholdRelationsModulesMemberwise/3/Bihar (South)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHouseholdRelationsModulesMemberwise/3/Bihar (South)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - South',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllHouseholdRelationsModulesTeamwise/4/Tamil Nadu - South'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHouseholdRelationsModulesMemberwise/4/Tamil Nadu - South/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHouseholdRelationsModulesMemberwise/4/Tamil Nadu - South/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHouseholdRelationsModulesMemberwise/4/Tamil Nadu - South/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Manipur',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllHouseholdRelationsModulesTeamwise/5/Manipur'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHouseholdRelationsModulesMemberwise/5/Manipur/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHouseholdRelationsModulesMemberwise/5/Manipur/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHouseholdRelationsModulesMemberwise/5/Manipur/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Meghalaya',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllHouseholdRelationsModulesTeamwise/6/Meghalaya'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHouseholdRelationsModulesMemberwise/6/Meghalaya/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHouseholdRelationsModulesMemberwise/6/Meghalaya/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllHouseholdRelationsModulesMemberwise/6/Meghalaya/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Mizoram',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllHouseholdRelationsModulesTeamwise/7/Mizoram'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllHouseholdRelationsModulesMemberwise/7/Mizoram/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllHouseholdRelationsModulesMemberwise/7/Mizoram/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllHouseholdRelationsModulesMemberwise/7/Mizoram/1/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Sikkim',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllHouseholdRelationsModulesTeamwise/8/Sikkim'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllHouseholdRelationsModulesMemberwise/8/Sikkim/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllHouseholdRelationsModulesMemberwise/8/Sikkim/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllHouseholdRelationsModulesMemberwise/8/Sikkim/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Andhra Pradesh & AN',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllHouseholdRelationsModulesTeamwise/11/Andhra Pradesh & AN'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllHouseholdRelationsModulesMemberwise/11/Andhra Pradesh & AN/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllHouseholdRelationsModulesMemberwise/11/Andhra Pradesh & AN/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllHouseholdRelationsModulesMemberwise/11/Andhra Pradesh & AN/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Himachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllHouseholdRelationsModulesTeamwise/14/Himachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllHouseholdRelationsModulesMemberwise/14/Himachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllHouseholdRelationsModulesMemberwise/14/Himachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllHouseholdRelationsModulesMemberwise/14/Himachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Jammu & Kashmir',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllHouseholdRelationsModulesTeamwise/15/Jammu & Kashmir'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllHouseholdRelationsModulesMemberwise/15/Jammu & Kashmir/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllHouseholdRelationsModulesMemberwise/15/Jammu & Kashmir/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllHouseholdRelationsModulesMemberwise/15/Jammu & Kashmir/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Kerala & Lakshadweep',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllHouseholdRelationsModulesTeamwise/18/Kerala & Lakshadweep'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllHouseholdRelationsModulesMemberwise/18/Kerala & Lakshadweep/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllHouseholdRelationsModulesMemberwise/18/Kerala & Lakshadweep/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllHouseholdRelationsModulesMemberwise/18/Kerala & Lakshadweep/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllHouseholdRelationsModulesTeamwise/19/Maharashtra (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllHouseholdRelationsModulesMemberwise/19/Maharashtra (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllHouseholdRelationsModulesMemberwise/19/Maharashtra (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllHouseholdRelationsModulesMemberwise/19/Maharashtra (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllHouseholdRelationsModulesTeamwise/20/Maharashtra (West)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllHouseholdRelationsModulesMemberwise/20/Maharashtra (West)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllHouseholdRelationsModulesMemberwise/20/Maharashtra (West)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllHouseholdRelationsModulesMemberwise/20/Maharashtra (West)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Arunachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllHouseholdRelationsModulesTeamwise/22/Arunachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllHouseholdRelationsModulesMemberwise/22/Arunachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllHouseholdRelationsModulesMemberwise/22/Arunachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllHouseholdRelationsModulesMemberwise/22/Arunachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - North & Puducherry',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllHouseholdRelationsModulesTeamwise/36/Tamil Nadu - North & Puducherry'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllHouseholdRelationsModulesMemberwise/36/Tamil Nadu - North & Puducherry/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllHouseholdRelationsModulesMemberwise/36/Tamil Nadu - North & Puducherry/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllHouseholdRelationsModulesMemberwise/36/Tamil Nadu - North & Puducherry/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllHouseholdRelationsModulesTeamwise/12/Gujarat (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllHouseholdRelationsModulesMemberwise/12/Gujarat (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllHouseholdRelationsModulesMemberwise/12/Gujarat (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllHouseholdRelationsModulesMemberwise/12/Gujarat (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (West) Daman Diu & Dadra Nagar Haweli',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllHouseholdRelationsModulesTeamwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllHouseholdRelationsModulesMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllHouseholdRelationsModulesMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllHouseholdRelationsModulesMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllHouseholdRelationsModulesTeamwise/28/Rajasthan (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllHouseholdRelationsModulesMemberwise/28/Rajasthan (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllHouseholdRelationsModulesMemberwise/28/Rajasthan (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllHouseholdRelationsModulesMemberwise/28/Rajasthan (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllHouseholdRelationsModulesTeamwise/37/Rajasthan (West)'],
                                            items: [
                                                {
                                                    label: 'Team 1',
                                                    routerLink:
                                                    ['getAllHouseholdRelationsModulesMemberwise/37/Rajasthan (West)/1/Team 1'],
                                                },
                                                {
                                                    label: 'Team 2',
                                                    routerLink:
                                                    ['getAllHouseholdRelationsModulesMemberwise/37/Rajasthan (West)/2/Team 2'],
                                                },
                                                {
                                                    label: 'Team 3',
                                                    routerLink:
                                                    ['getAllHouseholdRelationsModulesMemberwise/37/Rajasthan (West)/3/Team 3'],
                                                },
                                            ],
                                    },
                                    {
                                        label: 'Nagaland',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllHouseholdRelationsModulesTeamwise/39/Nagaland'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllHouseholdRelationsModulesMemberwise/39/Nagaland/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllHouseholdRelationsModulesMemberwise/39/Nagaland/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllHouseholdRelationsModulesMemberwise/39/Nagaland/3/Team 3'],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },

                    ////////////////////////////////////////

                {

                    status: 'additional',
                    items:[
                        {
                        label: 'Contraceptive Prevalence Rate',
                        
                        icon: 'pi pi-bars',
                        items: [
                            {
                                label: 'Contraceptive Prevalence Rate',
                                icon: 'pi pi-bars',
                                routerLink: ['getAllContraceptivePrevalenceRate'],
                            },
                            {
                                label: 'StateWise',
                                icon: 'pi pi-bars',
                                //
                                items: [
                                    {
                                        label: 'Assam',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllContraceptivePrevalenceRateTeamwise/1/Assam'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllContraceptivePrevalenceRateMemberwise/1/Assam/1/Team 1'
                                                ],
                                            },

                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllContraceptivePrevalenceRateMemberwise/1/Assam/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllContraceptivePrevalenceRateMemberwise/1/Assam/3/Team 3'
                                                ],
                                            },
                                            {
                                                label: 'Team 4',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllContraceptivePrevalenceRateMemberwise/1/Assam/4/Team 4'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (North)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllContraceptivePrevalenceRateTeamwise/2/Bihar (North)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllContraceptivePrevalenceRateMemberwise/2/Bihar (North)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllContraceptivePrevalenceRateMemberwise/2/Bihar (North)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllContraceptivePrevalenceRateMemberwise/2/Bihar (North)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (South)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllContraceptivePrevalenceRateTeamwise/3/Bihar (South)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllContraceptivePrevalenceRateMemberwise/3/Bihar (South)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllContraceptivePrevalenceRateMemberwise/3/Bihar (South)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllContraceptivePrevalenceRateMemberwise/3/Bihar (South)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - South',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllContraceptivePrevalenceRateTeamwise/4/Tamil Nadu - South'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllContraceptivePrevalenceRateMemberwise/4/Tamil Nadu - South/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllContraceptivePrevalenceRateMemberwise/4/Tamil Nadu - South/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllContraceptivePrevalenceRateMemberwise/4/Tamil Nadu - South/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Manipur',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllContraceptivePrevalenceRateTeamwise/5/Manipur'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllContraceptivePrevalenceRateMemberwise/5/Manipur/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllContraceptivePrevalenceRateMemberwise/5/Manipur/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllContraceptivePrevalenceRateMemberwise/5/Manipur/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Meghalaya',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllContraceptivePrevalenceRateTeamwise/6/Meghalaya'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllContraceptivePrevalenceRateMemberwise/6/Meghalaya/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllContraceptivePrevalenceRateMemberwise/6/Meghalaya/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllContraceptivePrevalenceRateMemberwise/6/Meghalaya/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Mizoram',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllContraceptivePrevalenceRateTeamwise/7/Mizoram'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllContraceptivePrevalenceRateMemberwise/7/Mizoram/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllContraceptivePrevalenceRateMemberwise/7/Mizoram/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllContraceptivePrevalenceRateMemberwise/7/Mizoram/1/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Sikkim',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllContraceptivePrevalenceRateTeamwise/8/Sikkim'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllContraceptivePrevalenceRateMemberwise/8/Sikkim/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllContraceptivePrevalenceRateMemberwise/8/Sikkim/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllContraceptivePrevalenceRateMemberwise/8/Sikkim/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Andhra Pradesh & AN',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllContraceptivePrevalenceRateTeamwise/11/Andhra Pradesh & AN'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllContraceptivePrevalenceRateMemberwise/11/Andhra Pradesh & AN/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllContraceptivePrevalenceRateMemberwise/11/Andhra Pradesh & AN/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllContraceptivePrevalenceRateMemberwise/11/Andhra Pradesh & AN/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Himachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllContraceptivePrevalenceRateTeamwise/14/Himachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllContraceptivePrevalenceRateMemberwise/14/Himachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllContraceptivePrevalenceRateMemberwise/14/Himachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllContraceptivePrevalenceRateMemberwise/14/Himachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Jammu & Kashmir',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllContraceptivePrevalenceRateTeamwise/15/Jammu & Kashmir'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllContraceptivePrevalenceRateMemberwise/15/Jammu & Kashmir/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllContraceptivePrevalenceRateMemberwise/15/Jammu & Kashmir/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllContraceptivePrevalenceRateMemberwise/15/Jammu & Kashmir/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Kerala & Lakshadweep',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllContraceptivePrevalenceRateTeamwise/18/Kerala & Lakshadweep'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllContraceptivePrevalenceRateMemberwise/18/Kerala & Lakshadweep/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllContraceptivePrevalenceRateMemberwise/18/Kerala & Lakshadweep/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllContraceptivePrevalenceRateMemberwise/18/Kerala & Lakshadweep/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllContraceptivePrevalenceRateTeamwise/19/Maharashtra (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllContraceptivePrevalenceRateMemberwise/19/Maharashtra (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllContraceptivePrevalenceRateMemberwise/19/Maharashtra (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllContraceptivePrevalenceRateMemberwise/19/Maharashtra (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllContraceptivePrevalenceRateTeamwise/20/Maharashtra (West)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllContraceptivePrevalenceRateMemberwise/20/Maharashtra (West)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllContraceptivePrevalenceRateMemberwise/20/Maharashtra (West)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllContraceptivePrevalenceRateMemberwise/20/Maharashtra (West)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Arunachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllContraceptivePrevalenceRateTeamwise/22/Arunachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllContraceptivePrevalenceRateMemberwise/22/Arunachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllContraceptivePrevalenceRateMemberwise/22/Arunachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllContraceptivePrevalenceRateMemberwise/22/Arunachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - North & Puducherry',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllContraceptivePrevalenceRateTeamwise/36/Tamil Nadu - North & Puducherry'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllContraceptivePrevalenceRateMemberwise/36/Tamil Nadu - North & Puducherry/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllContraceptivePrevalenceRateMemberwise/36/Tamil Nadu - North & Puducherry/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllContraceptivePrevalenceRateMemberwise/36/Tamil Nadu - North & Puducherry/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllContraceptivePrevalenceRateTeamwise/12/Gujarat (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllContraceptivePrevalenceRateMemberwise/12/Gujarat (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllContraceptivePrevalenceRateMemberwise/12/Gujarat (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllContraceptivePrevalenceRateMemberwise/12/Gujarat (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (West) Daman Diu & Dadra Nagar Haweli',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllContraceptivePrevalenceRateTeamwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllContraceptivePrevalenceRateMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllContraceptivePrevalenceRateMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllContraceptivePrevalenceRateMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllContraceptivePrevalenceRateTeamwise/28/Rajasthan (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllContraceptivePrevalenceRateMemberwise/28/Rajasthan (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllContraceptivePrevalenceRateMemberwise/28/Rajasthan (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllContraceptivePrevalenceRateMemberwise/28/Rajasthan (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllContraceptivePrevalenceRateTeamwise/37/Rajasthan (West)'],
                                            items: [
                                                {
                                                    label: 'Team 1',
                                                    routerLink:
                                                    ['getAllContraceptivePrevalenceRateMemberwise/37/Rajasthan (West)/1/Team 1'],
                                                },
                                                {
                                                    label: 'Team 2',
                                                    routerLink:
                                                    ['getAllContraceptivePrevalenceRateMemberwise/37/Rajasthan (West)/2/Team 2'],
                                                },
                                                {
                                                    label: 'Team 3',
                                                    routerLink:
                                                    ['getAllContraceptivePrevalenceRateMemberwise/37/Rajasthan (West)/3/Team 3'],
                                                },
                                            ],
                                    },
                                    {
                                        label: 'Nagaland',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllContraceptivePrevalenceRateTeamwise/39/Nagaland'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllContraceptivePrevalenceRateMemberwise/39/Nagaland/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllContraceptivePrevalenceRateMemberwise/39/Nagaland/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllContraceptivePrevalenceRateMemberwise/39/Nagaland/3/Team 3'],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },

                    ////////////////////////////////////////////////

                    {
                        status: 'social',
                        items:[
                            {
                        
                        label: 'Vaccination-Health Cards',
                        
                        icon: 'pi pi-bars',
                        items: [
                            {
                                label: 'Vaccination-Health Cards',
                                icon: 'pi pi-bars',
                                routerLink: ['getAllVaccinationHealthCards'],
                            },
                            {
                                label: 'StateWise',
                                icon: 'pi pi-bars',
                                //
                                items: [
                                    {
                                        label: 'Assam',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllVaccinationHealthCardsTeamwise/1/Assam'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVaccinationHealthCardsMemberwise/1/Assam/1/Team 1'
                                                ],
                                            },

                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVaccinationHealthCardsMemberwise/1/Assam/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVaccinationHealthCardsMemberwise/1/Assam/3/Team 3'
                                                ],
                                            },
                                            {
                                                label: 'Team 4',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVaccinationHealthCardsMemberwise/1/Assam/4/Team 4'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (North)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllVaccinationHealthCardsTeamwise/2/Bihar (North)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVaccinationHealthCardsMemberwise/2/Bihar (North)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVaccinationHealthCardsMemberwise/2/Bihar (North)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVaccinationHealthCardsMemberwise/2/Bihar (North)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (South)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllVaccinationHealthCardsTeamwise/3/Bihar (South)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVaccinationHealthCardsMemberwise/3/Bihar (South)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVaccinationHealthCardsMemberwise/3/Bihar (South)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVaccinationHealthCardsMemberwise/3/Bihar (South)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - South',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllVaccinationHealthCardsTeamwise/4/Tamil Nadu - South'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVaccinationHealthCardsMemberwise/4/Tamil Nadu - South/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVaccinationHealthCardsMemberwise/4/Tamil Nadu - South/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVaccinationHealthCardsMemberwise/4/Tamil Nadu - South/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Manipur',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllVaccinationHealthCardsTeamwise/5/Manipur'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVaccinationHealthCardsMemberwise/5/Manipur/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVaccinationHealthCardsMemberwise/5/Manipur/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVaccinationHealthCardsMemberwise/5/Manipur/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Meghalaya',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllVaccinationHealthCardsTeamwise/6/Meghalaya'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVaccinationHealthCardsMemberwise/6/Meghalaya/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVaccinationHealthCardsMemberwise/6/Meghalaya/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllVaccinationHealthCardsMemberwise/6/Meghalaya/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Mizoram',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllVaccinationHealthCardsTeamwise/7/Mizoram'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllVaccinationHealthCardsMemberwise/7/Mizoram/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllVaccinationHealthCardsMemberwise/7/Mizoram/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllVaccinationHealthCardsMemberwise/7/Mizoram/1/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Sikkim',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllVaccinationHealthCardsTeamwise/8/Sikkim'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllVaccinationHealthCardsMemberwise/8/Sikkim/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllVaccinationHealthCardsMemberwise/8/Sikkim/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllVaccinationHealthCardsMemberwise/8/Sikkim/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Andhra Pradesh & AN',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllVaccinationHealthCardsTeamwise/11/Andhra Pradesh & AN'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllVaccinationHealthCardsMemberwise/11/Andhra Pradesh & AN/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllVaccinationHealthCardsMemberwise/11/Andhra Pradesh & AN/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllVaccinationHealthCardsMemberwise/11/Andhra Pradesh & AN/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Himachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllVaccinationHealthCardsTeamwise/14/Himachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllVaccinationHealthCardsMemberwise/14/Himachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllVaccinationHealthCardsMemberwise/14/Himachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllVaccinationHealthCardsMemberwise/14/Himachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Jammu & Kashmir',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllVaccinationHealthCardsTeamwise/15/Jammu & Kashmir'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllVaccinationHealthCardsMemberwise/15/Jammu & Kashmir/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllVaccinationHealthCardsMemberwise/15/Jammu & Kashmir/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllVaccinationHealthCardsMemberwise/15/Jammu & Kashmir/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Kerala & Lakshadweep',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllVaccinationHealthCardsTeamwise/18/Kerala & Lakshadweep'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllVaccinationHealthCardsMemberwise/18/Kerala & Lakshadweep/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllVaccinationHealthCardsMemberwise/18/Kerala & Lakshadweep/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllVaccinationHealthCardsMemberwise/18/Kerala & Lakshadweep/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllVaccinationHealthCardsTeamwise/19/Maharashtra (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllVaccinationHealthCardsMemberwise/19/Maharashtra (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllVaccinationHealthCardsMemberwise/19/Maharashtra (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllVaccinationHealthCardsMemberwise/19/Maharashtra (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllVaccinationHealthCardsTeamwise/20/Maharashtra (West)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllVaccinationHealthCardsMemberwise/20/Maharashtra (West)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllVaccinationHealthCardsMemberwise/20/Maharashtra (West)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllVaccinationHealthCardsMemberwise/20/Maharashtra (West)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Arunachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllVaccinationHealthCardsTeamwise/22/Arunachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllVaccinationHealthCardsMemberwise/22/Arunachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllVaccinationHealthCardsMemberwise/22/Arunachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllVaccinationHealthCardsMemberwise/22/Arunachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - North & Puducherry',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllVaccinationHealthCardsTeamwise/36/Tamil Nadu - North & Puducherry'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllVaccinationHealthCardsMemberwise/36/Tamil Nadu - North & Puducherry/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllVaccinationHealthCardsMemberwise/36/Tamil Nadu - North & Puducherry/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllVaccinationHealthCardsMemberwise/36/Tamil Nadu - North & Puducherry/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllVaccinationHealthCardsTeamwise/12/Gujarat (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllVaccinationHealthCardsMemberwise/12/Gujarat (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllVaccinationHealthCardsMemberwise/12/Gujarat (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllVaccinationHealthCardsMemberwise/12/Gujarat (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (West) Daman Diu & Dadra Nagar Haweli',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllVaccinationHealthCardsTeamwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllVaccinationHealthCardsMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllVaccinationHealthCardsMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllVaccinationHealthCardsMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllVaccinationHealthCardsTeamwise/28/Rajasthan (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllVaccinationHealthCardsMemberwise/28/Rajasthan (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllVaccinationHealthCardsMemberwise/28/Rajasthan (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllVaccinationHealthCardsMemberwise/28/Rajasthan (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllVaccinationHealthCardsTeamwise/37/Rajasthan (West)'],
                                            items: [
                                                {
                                                    label: 'Team 1',
                                                    routerLink:
                                                    ['getAllVaccinationHealthCardsMemberwise/37/Rajasthan (West)/1/Team 1'],
                                                },
                                                {
                                                    label: 'Team 2',
                                                    routerLink:
                                                    ['getAllVaccinationHealthCardsMemberwise/37/Rajasthan (West)/2/Team 2'],
                                                },
                                                {
                                                    label: 'Team 3',
                                                    routerLink:
                                                    ['getAllVaccinationHealthCardsMemberwise/37/Rajasthan (West)/3/Team 3'],
                                                },
                                            ],
                                    },
                                    {
                                        label: 'Nagaland',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllVaccinationHealthCardsTeamwise/39/Nagaland'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllVaccinationHealthCardsMemberwise/39/Nagaland/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllVaccinationHealthCardsMemberwise/39/Nagaland/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllVaccinationHealthCardsMemberwise/39/Nagaland/3/Team 3'],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },

                    //////////////////////////////////////////

                    {
                        status: 'social',
                        items:[
                            {
                        
                        label: 'Birth Displacement',
                        
                        icon: 'pi pi-bars',
                        items: [
                            {
                                label: 'Birth Displacement',
                                icon: 'pi pi-bars',
                                routerLink: ['getAllBirthDisplacement'],
                            },
                            {
                                label: 'StateWise',
                                icon: 'pi pi-bars',
                                //
                                items: [
                                    {
                                        label: 'Assam',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllBirthDisplacementTeamwise/1/Assam'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthDisplacementMemberwise/1/Assam/1/Team 1'
                                                ],
                                            },

                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthDisplacementMemberwise/1/Assam/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthDisplacementMemberwise/1/Assam/3/Team 3'
                                                ],
                                            },
                                            {
                                                label: 'Team 4',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthDisplacementMemberwise/1/Assam/4/Team 4'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (North)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllBirthDisplacementTeamwise/2/Bihar (North)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthDisplacementMemberwise/2/Bihar (North)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthDisplacementMemberwise/2/Bihar (North)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthDisplacementMemberwise/2/Bihar (North)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (South)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllBirthDisplacementTeamwise/3/Bihar (South)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthDisplacementMemberwise/3/Bihar (South)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthDisplacementMemberwise/3/Bihar (South)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthDisplacementMemberwise/3/Bihar (South)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - South',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllBirthDisplacementTeamwise/4/Tamil Nadu - South'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthDisplacementMemberwise/4/Tamil Nadu - South/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthDisplacementMemberwise/4/Tamil Nadu - South/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthDisplacementMemberwise/4/Tamil Nadu - South/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Manipur',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllBirthDisplacementTeamwise/5/Manipur'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthDisplacementMemberwise/5/Manipur/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthDisplacementMemberwise/5/Manipur/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthDisplacementMemberwise/5/Manipur/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Meghalaya',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllBirthDisplacementTeamwise/6/Meghalaya'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthDisplacementMemberwise/6/Meghalaya/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthDisplacementMemberwise/6/Meghalaya/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthDisplacementMemberwise/6/Meghalaya/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Mizoram',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllBirthDisplacementTeamwise/7/Mizoram'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllBirthDisplacementMemberwise/7/Mizoram/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllBirthDisplacementMemberwise/7/Mizoram/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllBirthDisplacementMemberwise/7/Mizoram/1/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Sikkim',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllBirthDisplacementTeamwise/8/Sikkim'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllBirthDisplacementMemberwise/8/Sikkim/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllBirthDisplacementMemberwise/8/Sikkim/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllBirthDisplacementMemberwise/8/Sikkim/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Andhra Pradesh & AN',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllBirthDisplacementTeamwise/11/Andhra Pradesh & AN'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllBirthDisplacementMemberwise/11/Andhra Pradesh & AN/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllBirthDisplacementMemberwise/11/Andhra Pradesh & AN/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllBirthDisplacementMemberwise/11/Andhra Pradesh & AN/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Himachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllBirthDisplacementTeamwise/14/Himachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllBirthDisplacementMemberwise/14/Himachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllBirthDisplacementMemberwise/14/Himachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllBirthDisplacementMemberwise/14/Himachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Jammu & Kashmir',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllBirthDisplacementTeamwise/15/Jammu & Kashmir'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllBirthDisplacementMemberwise/15/Jammu & Kashmir/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllBirthDisplacementMemberwise/15/Jammu & Kashmir/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllBirthDisplacementMemberwise/15/Jammu & Kashmir/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Kerala & Lakshadweep',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllBirthDisplacementTeamwise/18/Kerala & Lakshadweep'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllBirthDisplacementMemberwise/18/Kerala & Lakshadweep/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllBirthDisplacementMemberwise/18/Kerala & Lakshadweep/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllBirthDisplacementMemberwise/18/Kerala & Lakshadweep/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllBirthDisplacementTeamwise/19/Maharashtra (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllBirthDisplacementMemberwise/19/Maharashtra (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllBirthDisplacementMemberwise/19/Maharashtra (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllBirthDisplacementMemberwise/19/Maharashtra (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllBirthDisplacementTeamwise/20/Maharashtra (West)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllBirthDisplacementMemberwise/20/Maharashtra (West)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllBirthDisplacementMemberwise/20/Maharashtra (West)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllBirthDisplacementMemberwise/20/Maharashtra (West)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Arunachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllBirthDisplacementTeamwise/22/Arunachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllBirthDisplacementMemberwise/22/Arunachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllBirthDisplacementMemberwise/22/Arunachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllBirthDisplacementMemberwise/22/Arunachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - North & Puducherry',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllBirthDisplacementTeamwise/36/Tamil Nadu - North & Puducherry'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllBirthDisplacementMemberwise/36/Tamil Nadu - North & Puducherry/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllBirthDisplacementMemberwise/36/Tamil Nadu - North & Puducherry/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllBirthDisplacementMemberwise/36/Tamil Nadu - North & Puducherry/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllBirthDisplacementTeamwise/12/Gujarat (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllBirthDisplacementMemberwise/12/Gujarat (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllBirthDisplacementMemberwise/12/Gujarat (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllBirthDisplacementMemberwise/12/Gujarat (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (West) Daman Diu & Dadra Nagar Haweli',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllBirthDisplacementTeamwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllBirthDisplacementMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllBirthDisplacementMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllBirthDisplacementMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllBirthDisplacementTeamwise/28/Rajasthan (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllBirthDisplacementMemberwise/28/Rajasthan (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllBirthDisplacementMemberwise/28/Rajasthan (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllBirthDisplacementMemberwise/28/Rajasthan (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllBirthDisplacementTeamwise/37/Rajasthan (West)'],
                                            items: [
                                                {
                                                    label: 'Team 1',
                                                    routerLink:
                                                    ['getAllBirthDisplacementMemberwise/37/Rajasthan (West)/1/Team 1'],
                                                },
                                                {
                                                    label: 'Team 2',
                                                    routerLink:
                                                    ['getAllBirthDisplacementMemberwise/37/Rajasthan (West)/2/Team 2'],
                                                },
                                                {
                                                    label: 'Team 3',
                                                    routerLink:
                                                    ['getAllBirthDisplacementMemberwise/37/Rajasthan (West)/3/Team 3'],
                                                },
                                            ],
                                    },
                                    {
                                        label: 'Nagaland',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllBirthDisplacementTeamwise/39/Nagaland'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllBirthDisplacementMemberwise/39/Nagaland/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllBirthDisplacementMemberwise/39/Nagaland/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllBirthDisplacementMemberwise/39/Nagaland/3/Team 3'],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },


                   {
                        status: 'cab',
                        items:[
                            {
                        
                        label: 'Birth Weight Healthcard',
                        
                        icon: 'pi pi-bars',
                        items: [
                            {
                                label: 'Birth Weight Healthcard',
                                icon: 'pi pi-bars',
                                routerLink: ['getAllBirthWeightHealthcard'],
                            },
                            {
                                label: 'StateWise',
                                icon: 'pi pi-bars',
                                //
                                items: [
                                    {
                                        label: 'Assam',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllBirthWeightHealthcardTeamwise/1/Assam'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthWeightHealthcardMemberwise/1/Assam/1/Team 1'
                                                ],
                                            },

                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthWeightHealthcardMemberwise/1/Assam/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthWeightHealthcardMemberwise/1/Assam/3/Team 3'
                                                ],
                                            },
                                            {
                                                label: 'Team 4',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthWeightHealthcardMemberwise/1/Assam/4/Team 4'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (North)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllBirthWeightHealthcardTeamwise/2/Bihar (North)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthWeightHealthcardMemberwise/2/Bihar (North)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthWeightHealthcardMemberwise/2/Bihar (North)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthWeightHealthcardMemberwise/2/Bihar (North)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Bihar (South)',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllBirthWeightHealthcardTeamwise/3/Bihar (South)'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthWeightHealthcardMemberwise/3/Bihar (South)/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthWeightHealthcardMemberwise/3/Bihar (South)/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthWeightHealthcardMemberwise/3/Bihar (South)/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - South',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllBirthWeightHealthcardTeamwise/4/Tamil Nadu - South'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthWeightHealthcardMemberwise/4/Tamil Nadu - South/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthWeightHealthcardMemberwise/4/Tamil Nadu - South/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthWeightHealthcardMemberwise/4/Tamil Nadu - South/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Manipur',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllBirthWeightHealthcardTeamwise/5/Manipur'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthWeightHealthcardMemberwise/5/Manipur/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthWeightHealthcardMemberwise/5/Manipur/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthWeightHealthcardMemberwise/5/Manipur/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Meghalaya',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllBirthWeightHealthcardTeamwise/6/Meghalaya'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthWeightHealthcardMemberwise/6/Meghalaya/1/Team 1'
                                                ],
                                            },
                                            {
                                                label: 'Team 2',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthWeightHealthcardMemberwise/6/Meghalaya/2/Team 2'
                                                ],
                                            },
                                            {
                                                label: 'Team 3',
                                                icon: 'pi pi-bars',
                                                routerLink: [
                                                    'getAllBirthWeightHealthcardMemberwise/6/Meghalaya/3/Team 3'
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Mizoram',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllBirthWeightHealthcardTeamwise/7/Mizoram'
                                        ],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllBirthWeightHealthcardMemberwise/7/Mizoram/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllBirthWeightHealthcardMemberwise/7/Mizoram/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllBirthWeightHealthcardMemberwise/7/Mizoram/1/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Sikkim',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllBirthWeightHealthcardTeamwise/8/Sikkim'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllBirthWeightHealthcardMemberwise/8/Sikkim/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllBirthWeightHealthcardMemberwise/8/Sikkim/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllBirthWeightHealthcardMemberwise/8/Sikkim/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Andhra Pradesh & AN',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllBirthWeightHealthcardTeamwise/11/Andhra Pradesh & AN'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllBirthWeightHealthcardMemberwise/11/Andhra Pradesh & AN/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                    ['getAllBirthWeightHealthcardMemberwise/11/Andhra Pradesh & AN/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                    ['getAllBirthWeightHealthcardMemberwise/11/Andhra Pradesh & AN/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Himachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllBirthWeightHealthcardTeamwise/14/Himachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                    ['getAllBirthWeightHealthcardMemberwise/14/Himachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllBirthWeightHealthcardMemberwise/14/Himachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllBirthWeightHealthcardMemberwise/14/Himachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Jammu & Kashmir',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllBirthWeightHealthcardTeamwise/15/Jammu & Kashmir'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllBirthWeightHealthcardMemberwise/15/Jammu & Kashmir/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllBirthWeightHealthcardMemberwise/15/Jammu & Kashmir/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllBirthWeightHealthcardMemberwise/15/Jammu & Kashmir/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Kerala & Lakshadweep',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllBirthWeightHealthcardTeamwise/18/Kerala & Lakshadweep'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllBirthWeightHealthcardMemberwise/18/Kerala & Lakshadweep/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllBirthWeightHealthcardMemberwise/18/Kerala & Lakshadweep/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllBirthWeightHealthcardMemberwise/18/Kerala & Lakshadweep/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllBirthWeightHealthcardTeamwise/19/Maharashtra (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllBirthWeightHealthcardMemberwise/19/Maharashtra (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllBirthWeightHealthcardMemberwise/19/Maharashtra (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllBirthWeightHealthcardMemberwise/19/Maharashtra (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Maharashtra (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllBirthWeightHealthcardTeamwise/20/Maharashtra (West)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllBirthWeightHealthcardMemberwise/20/Maharashtra (West)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllBirthWeightHealthcardMemberwise/20/Maharashtra (West)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllBirthWeightHealthcardMemberwise/20/Maharashtra (West)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Arunachal Pradesh',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllBirthWeightHealthcardTeamwise/22/Arunachal Pradesh'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllBirthWeightHealthcardMemberwise/22/Arunachal Pradesh/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllBirthWeightHealthcardMemberwise/22/Arunachal Pradesh/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllBirthWeightHealthcardMemberwise/22/Arunachal Pradesh/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Tamil Nadu - North & Puducherry',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllBirthWeightHealthcardTeamwise/36/Tamil Nadu - North & Puducherry'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllBirthWeightHealthcardMemberwise/36/Tamil Nadu - North & Puducherry/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllBirthWeightHealthcardMemberwise/36/Tamil Nadu - North & Puducherry/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllBirthWeightHealthcardMemberwise/36/Tamil Nadu - North & Puducherry/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllBirthWeightHealthcardTeamwise/12/Gujarat (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllBirthWeightHealthcardMemberwise/12/Gujarat (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllBirthWeightHealthcardMemberwise/12/Gujarat (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllBirthWeightHealthcardMemberwise/12/Gujarat (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Gujarat (West) Daman Diu & Dadra Nagar Haweli',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllBirthWeightHealthcardTeamwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllBirthWeightHealthcardMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllBirthWeightHealthcardMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllBirthWeightHealthcardMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (East)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllBirthWeightHealthcardTeamwise/28/Rajasthan (East)'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllBirthWeightHealthcardMemberwise/28/Rajasthan (East)/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllBirthWeightHealthcardMemberwise/28/Rajasthan (East)/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllBirthWeightHealthcardMemberwise/28/Rajasthan (East)/3/Team 3'],
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Rajasthan (West)',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllBirthWeightHealthcardTeamwise/37/Rajasthan (West)'],
                                            items: [
                                                {
                                                    label: 'Team 1',
                                                    routerLink:
                                                    ['getAllBirthWeightHealthcardMemberwise/37/Rajasthan (West)/1/Team 1'],
                                                },
                                                {
                                                    label: 'Team 2',
                                                    routerLink:
                                                    ['getAllBirthWeightHealthcardMemberwise/37/Rajasthan (West)/2/Team 2'],
                                                },
                                                {
                                                    label: 'Team 3',
                                                    routerLink:
                                                    ['getAllBirthWeightHealthcardMemberwise/37/Rajasthan (West)/3/Team 3'],
                                                },
                                            ],
                                    },
                                    {
                                        label: 'Nagaland',
                                        icon: 'pi pi-bars',
                                        routerLink:
                                            ['getAllBirthWeightHealthcardTeamwise/39/Nagaland'],
                                        items: [
                                            {
                                                label: 'Team 1',
                                                routerLink:
                                                ['getAllBirthWeightHealthcardMemberwise/39/Nagaland/1/Team 1'],
                                            },
                                            {
                                                label: 'Team 2',
                                                routerLink:
                                                ['getAllBirthWeightHealthcardMemberwise/39/Nagaland/2/Team 2'],
                                            },
                                            {
                                                label: 'Team 3',
                                                routerLink:
                                                ['getAllBirthWeightHealthcardMemberwise/39/Nagaland/3/Team 3'],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },


                ]
            }
        }
//             },
//         ];
//     }
// }
