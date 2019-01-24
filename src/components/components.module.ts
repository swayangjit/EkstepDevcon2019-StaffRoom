import { NgModule } from '@angular/core';
import { DialogPopupComponent } from './dialog-popup/dialog-popup';
import { ReportAlertComponent } from './report-alert/report-alert';
import { AttendenceComponent } from './attendence/attendence';
import { SendNoteComponent } from './send-note/send-note';
@NgModule({
	declarations: [DialogPopupComponent,
    ReportAlertComponent,
    AttendenceComponent,
    SendNoteComponent],
	imports: [],
	exports: [DialogPopupComponent,
    ReportAlertComponent,
    AttendenceComponent,
    SendNoteComponent],
	entryComponents: [DialogPopupComponent]
})
export class ComponentsModule {}
