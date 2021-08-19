import { Provider } from '@angular/core';
import { AlcaeusResourceFetchService } from './internal/alcaeus-resource-fetch.service';
import { ResourceFetchService } from './resource-fetch.service';

export const resourceFetchServiceProvider: Provider = {
  provide: ResourceFetchService,
  useClass: AlcaeusResourceFetchService
}
