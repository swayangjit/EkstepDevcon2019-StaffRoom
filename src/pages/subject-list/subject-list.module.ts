import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubjectListPage } from './subject-list';

@NgModule({
  declarations: [
    SubjectListPage,
  ],
  imports: [
    IonicPageModule.forChild(SubjectListPage),
  ],
})
export class SubjectListPageModule {}
