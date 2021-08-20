import { Directive, HostListener, Input } from '@angular/core';
import { HydraRouter } from '../services/router';

@Directive({
  selector: 'hydraLink'
})
export class HydraLink {
  @Input()
  public hydraLink: string | undefined;

  constructor(
    private hydraRouter: HydraRouter
  )
  {}

  @HostListener('click')
  public OnClick()
  {
    if (this.hydraLink)
    {
      this.hydraRouter.route(this.hydraLink);
    }
  }
}
