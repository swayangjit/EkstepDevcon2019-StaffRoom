import { NgModule } from '@angular/core';
import { DialogPopupComponent } from './dialog-popup/dialog-popup';
import { ReportAlertComponent } from './report-alert/report-alert';
import { AttendenceComponent } from './attendence/attendence';
@NgModule({
	declarations: [DialogPopupComponent,
    ReportAlertComponent,
    AttendenceComponent],
	imports: [],
	exports: [DialogPopupComponent,
    ReportAlertComponent,
    AttendenceComponent],
	entryComponents: [DialogPopupComponent]
})
export class ComponentsModule {}
