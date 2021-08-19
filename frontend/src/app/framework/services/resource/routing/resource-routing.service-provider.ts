import { Provider } from '@angular/core';
import { QueryParamResourceRoutingService } from './internal/query-param-resource-routing.service'
import { ResourceRoutingService } from './resource-routing.service';

export const resourceRoutingServiceProvider: Provider = {
  provide: ResourceRoutingService,
  useClass: QueryParamResourceRoutingService
}
