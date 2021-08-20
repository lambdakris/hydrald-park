import { Component, HostListener, Input } from '@angular/core';
import { HydraRouter } from '../services/router';


@Component({
  selector: 'hydra-link',
  template: `<ng-content></ng-content>`
})
export class HydraLink {
  @Input()
  public src?: string;

  constructor(
    private router: HydraRouter)
  {}

  @HostListener('click')
  public onClick()
  {
    if (this.src)
    {
      this.router.route(this.src);
    }
  }
}