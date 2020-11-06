import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
  ],
  providers: [
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: {
        baseUrl: environment.apiUrl,
      },
    },
  ],
})
export class CoreModule {}
