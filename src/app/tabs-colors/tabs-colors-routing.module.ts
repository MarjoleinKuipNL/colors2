import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsColorsPage } from './tabs-colors.page';

const routes: Routes = [
  {
    path: 'tabs-colors',
    component: TabsColorsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../TabsColors/tab-one/tab-one.module').then(m => m.TabOnePageModule),

      },
      {
        path: 'tab2',
        loadChildren: () => import('./../TabsColors/tab-two/tab-two.module').then(m => m.TabTwoPageModule),

      },
      {
        path: 'tab3',
        loadChildren: () => import('../TabsColors/tab-three/tab-three.module').then(m => m.TabThreePageModule),

      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab-one',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class TabsColorsPageRoutingModule {}


