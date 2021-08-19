import { Directive, HostListener, Input } from '@angular/core';
import { ResourceRoutingService } from '../services/resource/routing';

@Directive({
  selector: 'hydra-link'
})
export class HydraLink {
  @Input()
  public href: string | undefined;

  constructor(
    private hydraRouter: ResourceRoutingService
  )
  {}

  @HostListener('click')
  public OnClick()
  {
    if (this.href)
    {
      this.hydraRouter.route(this.href);
    }    
  }
}
