import { NgModule } from '@angular/core';
import { DialogPopupComponent } from './dialog-popup/dialog-popup';
import { ReportAlertComponent } from './report-alert/report-alert';
@NgModule({
	declarations: [DialogPopupComponent,
    ReportAlertComponent],
	imports: [],
	exports: [DialogPopupComponent,
    ReportAlertComponent],
	entryComponents: [DialogPopupComponent]
})
export class ComponentsModule {}
