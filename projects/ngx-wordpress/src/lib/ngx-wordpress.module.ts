import { NgxWordpressService } from './ngx-wordpress.service';
import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { PostCardComponent } from './post-card/post-card.component';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

export interface LibConfig {
  apiUrl: string;
}

export const LibConfigService = new InjectionToken<LibConfig>('LibConfig');

@NgModule({
  declarations: [PostCardComponent],
  imports: [CommonModule, HttpClientModule, IonicModule],
  exports: [PostCardComponent]
})
export class NgxWordpressModule {
  static forRoot(config: LibConfig): ModuleWithProviders {
    return {
      ngModule: NgxWordpressModule,
      providers: [
        NgxWordpressService,
        {
          provide: LibConfigService,
          useValue: config
        }
      ]
    };
  }
}
