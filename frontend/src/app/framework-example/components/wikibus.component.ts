import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MediaObjectRendererComponent } from '../../framework/components/media-object-renderer/media-object-renderer.component';

@Component({
  selector: 'wikibus',
  template: `
    <hydra-api [src]="apiBaseUrl"></hydra-api>
  `
})
export class WikiBusApiComponent {
  public apiBaseUrl = "https://wikibus-bff-production.herokuapp.com/"; //"https://sources.wikibus.org/";

  // @ViewChild('mainView')
  // public mainView?: MediaObjectRendererComponent

  // ngAfterViewInit(): void {
  //   if (!this.mainView)
  //   {
  //     return;
  //   }
  // }

}
