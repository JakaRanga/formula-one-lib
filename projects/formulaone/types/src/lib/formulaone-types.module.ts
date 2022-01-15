import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { JsonInterceptor } from './services/json.interceptor';

@NgModule({
    imports: [
        HttpClientModule
    ]
})
export class FormulaOneTypesModule {

  public static forRoot(environment: any): ModuleWithProviders<FormulaOneTypesModule> {

    return {
        ngModule: FormulaOneTypesModule,
        providers: [
            {
                provide: 'env',
                useValue: environment
            },
            { provide: HTTP_INTERCEPTORS, useClass: JsonInterceptor, multi: true }
        ]
    };
}

 }
