import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssetsPage } from './assets';

@NgModule({
  declarations: [
    AssetsPage,
  ],
  imports: [
    IonicPageModule.forChild(AssetsPage),
  ],
})
export class AssetsPageModule {}
