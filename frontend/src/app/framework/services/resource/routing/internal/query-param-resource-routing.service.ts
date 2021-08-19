import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResourceRoutingService } from '../resource-routing.service';

@Injectable()
export class QueryParamResourceRoutingService extends ResourceRoutingService {
  static IRI_QUERY_PARAM_NAME = "iri";

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    super();
  }

  route(iri: string) {
    this.router.navigate(
      [],
      {
        queryParams: {
          [QueryParamResourceRoutingService.IRI_QUERY_PARAM_NAME]: iri
        },
        queryParamsHandling: 'merge'
      }
    );
  }

  getIri$(): Observable<string> {
    return this.activatedRoute.queryParams
      .pipe(
        map(x => x[QueryParamResourceRoutingService.IRI_QUERY_PARAM_NAME])
      );
  }
}
