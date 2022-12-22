import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsColorsPageRoutingModule } from './tabs-colors-routing.module';

import { TabsColorsPage } from './tabs-colors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsColorsPageRoutingModule
  ],
  declarations: [TabsColorsPage]
})
export class TabsColorsPageModule {}
