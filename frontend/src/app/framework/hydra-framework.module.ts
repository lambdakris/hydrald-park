import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MediaObjectRendererComponent } from './components/media-object-renderer/media-object-renderer.component';
import { MediaHostDirective } from './directives/media-host.directive';
import { ObsWithStatusPipe } from './pipes/obs-with-status.pipe';
import { DefaultResourceRenderer } from './components/default-resource-renderer/default-resource-renderer.component';
import { HydraLink } from './components/hydra-link.component';
import { HydraFrameworkConfig } from './model';
import { HydraFrameworkConfigurationService } from './services/framework-configuration.service';

@NgModule({
    declarations: [
        DefaultResourceRenderer,
        MediaObjectRendererComponent,
        ObsWithStatusPipe,
        MediaHostDirective,
        HydraLink
    ],
    imports: [
        CommonModule
    ],
    providers: [],
    exports: [
      MediaObjectRendererComponent,
      HydraLink
    ]
})
export class HydraClientFrameworkModule {
  static forRoot(config: HydraFrameworkConfig): ModuleWithProviders<HydraClientFrameworkModule> {
    return {
      ngModule: HydraClientFrameworkModule,
      providers: [
        {
          provide: HydraFrameworkConfigurationService,
          useValue: config
        }
      ]
    }
  }

}
