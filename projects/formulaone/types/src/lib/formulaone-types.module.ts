import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({})
export class FormulaOneTypesModule {

  public static forRoot(environment: any): ModuleWithProviders<FormulaOneTypesModule> {

    return {
        ngModule: FormulaOneTypesModule,
        providers: [
            {
                provide: 'env',
                useValue: environment
            }
        ]
    };
}

 }
