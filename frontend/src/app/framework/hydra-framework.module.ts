import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MediaObjectRendererComponent } from './components/media-object-renderer/media-object-renderer.component';
import { MediaHostDirective } from './directives/media-host.directive';
import { ObsWithStatusPipe } from './pipes/obs-with-status.pipe';
import { HydraResourceProvider } from './services/hydra-resource-provider.service';
import { HydraResourceComponentProvider } from './services/hydra-renderer-provider.service';

const router = RouterModule.forChild([
    {
        path: '**',
        component: MediaObjectRendererComponent
    }
])

@NgModule({
    declarations: [
        MediaObjectRendererComponent,
        ObsWithStatusPipe,
        MediaHostDirective
    ],
    imports: [
        CommonModule,
        router
    ],
    providers: [
        HydraResourceProvider,
        HydraResourceComponentProvider
    ]
})
export class HydraClientFrameworkModule {}
