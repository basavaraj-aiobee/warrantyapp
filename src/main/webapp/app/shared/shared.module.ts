import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WarrantyappSharedLibsModule, WarrantyappSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [WarrantyappSharedLibsModule, WarrantyappSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [WarrantyappSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WarrantyappSharedModule {
  static forRoot() {
    return {
      ngModule: WarrantyappSharedModule
    };
  }
}
