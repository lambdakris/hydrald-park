import { Provider } from '@angular/core';
import { QueryParamHydraRoutingService } from './internal/query-param-hydra-router.service'
import { HydraRouter } from './hydra-router.service';

export const hydraRouterProvider: Provider = {
  provide: HydraRouter,
  useClass: QueryParamHydraRoutingService
}
