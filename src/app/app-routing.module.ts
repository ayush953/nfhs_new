import {
    Routes,
    Router,
    RouterModule,
    NavigationEnd,
    RouteReuseStrategy,
} from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './layout/app.layout.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';

import { EligibleMenPerHhComponent } from './components/eligible-men-per-hh/eligible-men-per-hh/eligible-men-per-hh.component';
import { EligibleMenPerHhTeamwiseComponent } from './components/eligible-men-per-hh/eligible-men-per-hh-teamwise/eligible-men-per-hh-teamwise.component';
import { EligibleMenPerHhMemberwiseComponent } from './components/eligible-men-per-hh/eligible-men-per-hh-memberwise/eligible-men-per-hh-memberwise.component';
import { EligibleWomenPerHhComponent } from './components/eligible-women-per-hh/eligible-women-per-hh/eligible-women-per-hh.component';
import { EligibleWomenPerHhMemberwiseComponent } from './components/eligible-women-per-hh/eligible-women-per-hh-memberwise/eligible-women-per-hh-memberwise.component';
import { EligibleWomenPerHhTeamwiseComponent } from './components/eligible-women-per-hh/eligible-women-per-hh-teamwise/eligible-women-per-hh-teamwise.component';
import { CustomRouteReuseStrategy } from './custom-route-reuse-strategy.service';
import { EligibleWomanResponseRateComponent } from './components/eligible-women-response-rate/eligible-woman-response-rate/eligible-woman-response-rate.component';
import { EligibleWomenResponseRateTeamwiseComponent } from './components/eligible-women-response-rate/eligible-women-response-rate-teamwise/eligible-women-response-rate-teamwise.component';
import { EligibleWomenResponseRateMemberwiseComponent } from './components/eligible-women-response-rate/eligible-women-response-rate-memberwise/eligible-women-response-rate-memberwise.component';
import { EligibleManResponseRateComponent } from './components/eligible-man-response-rate/eligible-man-response-rate/eligible-man-response-rate.component';
import { EligibleManResponseRateTeamwiseComponent } from './components/eligible-man-response-rate/eligible-man-response-rate-teamwise/eligible-man-response-rate-teamwise.component';
import { EligibleManResponseRateMemberwiseComponent } from './components/eligible-man-response-rate/eligible-man-response-rate-memberwise/eligible-man-response-rate-memberwise.component';
import { Women1549VisitsComponent } from './components/women1549Visits/women1549-visits/women1549-visits.component';
import { Women1549VisitsMemberwiseComponent } from './components/women1549Visits/women1549-visits-memberwise/women1549-visits-memberwise.component';
import { Women1549VisitsTeamwiseComponent } from './components/women1549Visits/women1549-visits-teamwise/women1549-visits-teamwise.component';
import { Men1554VisitsComponent } from './components/men1554Visits/men1554-visits/men1554-visits.component';
import { Men1554VisitsMemberwiseComponent } from './components/men1554Visits/men1554-visits-memberwise/men1554-visits-memberwise.component';
import { Men1554VisitsTeamwiseComponent } from './components/men1554Visits/men1554-visits-teamwise/men1554-visits-teamwise.component';
import { HhRelationsModuleComponent } from './components/hhRelationsModule/hh-relations-module/hh-relations-module.component';
import { HhRelationsModuleTeamwiseComponent } from './components/hhRelationsModule/hh-relations-module-teamwise/hh-relations-module-teamwise.component';
import { HhRelationsModuleMemberwiseComponent } from './components/hhRelationsModule/hh-relations-module-memberwise/hh-relations-module-memberwise.component';
import { ContraceptivePrevalenceRateComponent } from './components/ContraceptivePrevalenceRate/contraceptive-prevalence-rate/contraceptive-prevalence-rate.component';
import { ContraceptivePrevalenceRateTeamwiseComponent } from './components/ContraceptivePrevalenceRate/contraceptive-prevalence-rate-teamwise/contraceptive-prevalence-rate-teamwise.component';
import { ContraceptivePrevalenceRateMemberwiseComponent } from './components/ContraceptivePrevalenceRate/contraceptive-prevalence-rate-memberwise/contraceptive-prevalence-rate-memberwise.component';
import { VaccinationHealthCardsComponent } from './components/VaccinationHealthCards/vaccination-health-cards/vaccination-health-cards.component';
import { VaccinationHealthCardsTeamwiseComponent } from './components/VaccinationHealthCards/vaccination-health-cards-teamwise/vaccination-health-cards-teamwise.component';
import { VaccinationHealthCardsMemberwiseComponent } from './components/VaccinationHealthCards/vaccination-health-cards-memberwise/vaccination-health-cards-memberwise.component';
import { BirthDisplacementComponent } from './components/birthDisplacement/birth-displacement/birth-displacement.component';
import { BirthDisplacementTeamwiseComponent } from './components/birthDisplacement/birth-displacement-teamwise/birth-displacement-teamwise.component';
import { BirthDisplacementMemberwiseComponent } from './components/birthDisplacement/birth-displacement-memberwise/birth-displacement-memberwise.component';
import { HhVisitsComponent } from './components/hh-visits/hh-visits/hh-visits.component';
import { HhVisitsTeamwiseComponent } from './components/hh-visits/hh-visits-teamwise/hh-visits-teamwise.component';
import { HhVisitsMemberwiseComponent } from './components/hh-visits/hh-visits-memberwise/hh-visits-memberwise.component';
import { HhcompletionRateComponent } from './components/hhcompletion-rate/hhcompletion-rate/hhcompletion-rate.component';
import { AgeDisplacementMenLowerLimitMemberwiseComponent } from './components/age-displacement-men-lower-limit/age-displacement-men-lower-limit-memberwise/age-displacement-men-lower-limit-memberwise.component';
import { AgeDisplacementMenLowerLimitTeamwiseComponent } from './components/age-displacement-men-lower-limit/age-displacement-men-lower-limit-teamwise/age-displacement-men-lower-limit-teamwise.component';
import { AgeDisplacementMenLowerLimitComponent } from './components/age-displacement-men-lower-limit/age-displacement-men-lower-limit/age-displacement-men-lower-limit.component';
import { AgeDisplacementMenUpperLimitMemberwiseComponent } from './components/age-displacement-men-upper-limit/age-displacement-men-upper-limit-memberwise/age-displacement-men-upper-limit-memberwise.component';
import { AgeDisplacementMenUpperLimitTeamwiseComponent } from './components/age-displacement-men-upper-limit/age-displacement-men-upper-limit-teamwise/age-displacement-men-upper-limit-teamwise.component';
import { AgeDisplacementMenUpperLimitComponent } from './components/age-displacement-men-upper-limit/age-displacement-men-upper-limit/age-displacement-men-upper-limit.component';
import { AgeDisplacementWomenLowerLimitMemberwiseComponent } from './components/age-displacement-women-lower-limit/age-displacement-women-lower-limit-memberwise/age-displacement-women-lower-limit-memberwise.component';
import { AgeDisplacementWomenLowerLimitTeamwiseComponent } from './components/age-displacement-women-lower-limit/age-displacement-women-lower-limit-teamwise/age-displacement-women-lower-limit-teamwise.component';
import { AgeDisplacementWomenLowerLimitComponent } from './components/age-displacement-women-lower-limit/age-displacement-women-lower-limit/age-displacement-women-lower-limit.component';
import { AgeDisplacementWomenUpperLimitMemberwiseComponent } from './components/age-displacement-women-upper-limit/age-displacement-women-upper-limit-memberwise/age-displacement-women-upper-limit-memberwise.component';
import { AgeDisplacementWomenUpperLimitTeamwiseComponent } from './components/age-displacement-women-upper-limit/age-displacement-women-upper-limit-teamwise/age-displacement-women-upper-limit-teamwise.component';
import { AgeDisplacementWomenUpperLimitComponent } from './components/age-displacement-women-upper-limit/age-displacement-women-upper-limit/age-displacement-women-upper-limit.component';
import { HhcompletionRateMemberwiseComponent } from './components/hhcompletion-rate/hhcompletion-rate-memberwise/hhcompletion-rate-memberwise.component';
import { HhcompletionRateTeamwiseComponent } from './components/hhcompletion-rate/hhcompletion-rate-teamwise/hhcompletion-rate-teamwise.component';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: '',
                    component: AppLayoutComponent,
                    children: [
                        {path : '', 
                        component : DashboardComponent
                        },
                        {
                            path: 'getAllEligibleMenPerHhReport',
                            component: EligibleMenPerHhComponent,
                        },
                        {
                            path: 'getAllEligibleMenPerHhReportTeamwise/:stateId/:stateName',
                            component: EligibleMenPerHhTeamwiseComponent,
                        },
                        {
                            path: 'getAllEligibleMenPerHhMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: EligibleMenPerHhMemberwiseComponent,
                        },
                        {
                            path: 'getAllEligibleWomenPerHhReport',
                            component: EligibleWomenPerHhComponent,
                        },
                        {
                            path: 'getAllEligibleWomenPerHhMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: EligibleWomenPerHhMemberwiseComponent,
                        },
                        {
                            path: 'getAllEligibleWomenPerHhReportTeamwise/:stateId/:stateName',
                            component: EligibleWomenPerHhTeamwiseComponent,
                        },
                        {
                            path: 'getAllVisitsHh',
                            component: HhVisitsComponent,
                        },
                        {
                            path: 'getAllVisitsHhTeamwise/:stateId/:stateName',
                            component: HhVisitsTeamwiseComponent,
                        },
                        {
                            path: 'getAllVisitsHhMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: HhVisitsMemberwiseComponent,
                        },
                        {
                            path: 'getAllHhCompletionRate',
                            component: HhcompletionRateComponent,
                        },
                        {
                            path: 'getAllHhCompletionRateTeamWise/:stateId/:stateName',
                            component: HhcompletionRateTeamwiseComponent,
                        },
                        {
                            path: 'getAllHhCompletionRateMemberWise/:stateId/:stateName/:teamNo/:teamName',
                            component: HhcompletionRateMemberwiseComponent,
                        },
                        {
                            path: 'getAllAgeDisplacementMenLowerLimit',
                            component: AgeDisplacementMenLowerLimitComponent,
                        },
                        {
                            path: 'getAllAgeDisplacementMenLowerLimitTeamWise/:stateId/:stateName',
                            component:
                                AgeDisplacementMenLowerLimitTeamwiseComponent,
                        },
                        {
                            path: 'getAllAgeDisplacementMenLowerLimitMemberWise/:stateId/:stateName/:teamNo/:teamName',
                            component:
                                AgeDisplacementMenLowerLimitMemberwiseComponent,
                        },
                        {
                            path: 'getAllAgeDisplacementMenUpperLimit',
                            component: AgeDisplacementMenUpperLimitComponent,
                        },
                        {
                            path: 'getAllAgeDisplacementMenUpperLimitTeamWise/:stateId/:stateName',
                            component:
                                AgeDisplacementMenUpperLimitTeamwiseComponent,
                        },
                        {
                            path: 'getAllAgeDisplacementMenUpperLimitMemberWise/:stateId/:stateName/:teamNo/:teamName',
                            component:
                                AgeDisplacementMenUpperLimitMemberwiseComponent,
                        },
                        {
                            path: 'getAllAgeDisplacementWomenLowerLimit',
                            component: AgeDisplacementWomenLowerLimitComponent,
                        },
                        {
                            path: 'getAllAgeDisplacementWomenLowerLimitTeamWise/:stateId/:stateName',
                            component:
                                AgeDisplacementWomenLowerLimitTeamwiseComponent,
                        },
                        {
                            path: 'getAllAgeDisplacementWomenLowerLimitMemberWise/:stateId/:stateName/:teamNo/:teamName',
                            component:
                                AgeDisplacementWomenLowerLimitMemberwiseComponent,
                        },
                        {
                            path: 'getAllAgeDisplacementWomenUpperLimit',
                            component: AgeDisplacementWomenUpperLimitComponent,
                        },
                        {
                            path: 'getAllAgeDisplacementWomenUpperLimitTeamwise/:stateId/:stateName',
                            component:
                                AgeDisplacementWomenUpperLimitTeamwiseComponent,
                        },
                        {
                            path: 'getAllAgeDisplacementWomenUpperLimitMemberWise/:stateId/:stateName/:teamNo/:teamName',
                            component:
                                AgeDisplacementWomenUpperLimitMemberwiseComponent,
                        },
                        {
                            path: 'getAllEligibleWomenResponseRate',
                            component: EligibleWomanResponseRateComponent,
                        },
                        {
                            path: 'getAllEligibleWomenResponseRateTeamwise/:stateId/:stateName',
                            component:
                                EligibleWomenResponseRateTeamwiseComponent,
                        },
                        {
                            path: 'getAllEligibleWomenResponseRateMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component:
                                EligibleWomenResponseRateMemberwiseComponent,
                        },
                        {
                            path: 'getAllEligibleManResponseRate',
                            component: EligibleManResponseRateComponent,
                        },
                        {
                            path: 'getAllEligibleManResponseRateTeamwise/:stateId/:stateName',
                            component: EligibleManResponseRateTeamwiseComponent,
                        },
                        {
                            path: 'getAllEligibleManResponseRateMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component:
                                EligibleManResponseRateMemberwiseComponent,
                        },
                        {
                            path: 'getAllWomenVisit1549Visits',
                            component: Women1549VisitsComponent,
                        },
                        {
                            path: 'getAllWomenVisit1549VisitsTeamwise/:stateId/:stateName',
                            component: Women1549VisitsTeamwiseComponent,
                        },
                        {
                            path: 'getAllWomenVisit1549VisitsMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: Women1549VisitsMemberwiseComponent,
                        },
                        {
                            path: 'getAllMenVisit1554Visits',
                            component: Men1554VisitsComponent,
                        },
                        {
                            path: 'getAllMenVisit1554VisitsTeamwise/:stateId/:stateName',
                            component: Men1554VisitsTeamwiseComponent,
                        },
                        {
                            path: 'getAllMenVisit1554VisitsMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: Men1554VisitsMemberwiseComponent,
                        },
                        {
                            path: 'getAllHouseholdRelationsModules',
                            component: HhRelationsModuleComponent,
                        },
                        {
                            path: 'getAllHouseholdRelationsModulesTeamwise/:stateId/:stateName',
                            component: HhRelationsModuleTeamwiseComponent,
                        },
                        {
                            path: 'getAllHouseholdRelationsModulesMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: HhRelationsModuleMemberwiseComponent,
                        },
                        {
                            path: 'getAllContraceptivePrevalenceRate',
                            component: ContraceptivePrevalenceRateComponent,
                        },
                        {
                            path: 'getAllContraceptivePrevalenceRateTeamwise/:stateId/:stateName',
                            component:
                                ContraceptivePrevalenceRateTeamwiseComponent,
                        },
                        {
                            path: 'getAllContraceptivePrevalenceRateMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component:
                                ContraceptivePrevalenceRateMemberwiseComponent,
                        },
                        {
                            path: 'getAllVaccinationHealthCards',
                            component: VaccinationHealthCardsComponent,
                        },
                        {
                            path: 'getAllVaccinationHealthCardsTeamwise/:stateId/:stateName',
                            component: VaccinationHealthCardsTeamwiseComponent,
                        },
                        {
                            path: 'getAllVaccinationHealthCardsMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component:
                                VaccinationHealthCardsMemberwiseComponent,
                        },
                        {
                            path: 'getAllBirthDisplacement',
                            component: BirthDisplacementComponent,
                        },
                        {
                            path: 'getAllBirthDisplacementTeamwise/:stateId/:stateName',
                            component: BirthDisplacementTeamwiseComponent,
                        },
                        {
                            path: 'getAllBirthDisplacementMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: BirthDisplacementMemberwiseComponent,
                        },
                    ],
                },
            ],
            {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                onSameUrlNavigation: 'reload',
            }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
    constructor(private router: Router) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
}
