import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerioddetailsPage } from './perioddetails';

@NgModule({
  declarations: [
    PerioddetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PerioddetailsPage),
  ],
})
export class PerioddetailsPageModule {}
