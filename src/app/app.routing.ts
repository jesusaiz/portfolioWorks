import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { WebComponent } from './portfolio/web/web.component';
import { GraficoComponent } from './portfolio/grafico/grafico.component';
import { CurriculumComponent } from './about/curriculum/curriculum.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'sobre-mi/curriculum', component: CurriculumComponent},
    {path:'portfolio/diseno-web',component: WebComponent},
    {path:'portfolio/diseno-grafico',component: GraficoComponent},
    {path:'**',component: Page404Component},
];
export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);