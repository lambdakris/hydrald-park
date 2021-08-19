import { Injectable } from '@angular/core';
import { Hydra } from 'alcaeus/web';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Resource } from 'src/app/framework/model';
import { ResourceRoutingService } from '../../routing/resource-routing.service';
import { ResourceFetchService } from '../resource-fetch.service';

@Injectable()
export class AlcaeusResourceFetchService implements ResourceFetchService {
  private readonly resource$: Observable<Resource | null>;
  
  constructor(
    resourceRoutingService: ResourceRoutingService
  ) {
    this.resource$ =
      resourceRoutingService.getIri$()
        .pipe(
          switchMap(async iri => {
            const { representation } = await Hydra.loadResource(iri);
            const resource = representation?.root;
            if (!resource)
            {
              return null;
            }

            return resource;
          })
        );
  }
  
  getResource$(): Observable<Resource | null> {
    return this.resource$;
  }
}
