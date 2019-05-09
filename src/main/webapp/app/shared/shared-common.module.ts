import { NgModule } from '@angular/core';

import { WarrantyappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [WarrantyappSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [WarrantyappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class WarrantyappSharedCommonModule {}
