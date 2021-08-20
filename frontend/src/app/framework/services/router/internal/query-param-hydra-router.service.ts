import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HydraRouter } from '../hydra-router.service';

@Injectable()
export class QueryParamHydraRoutingService extends HydraRouter {
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
          [QueryParamHydraRoutingService.IRI_QUERY_PARAM_NAME]: iri
        },
        queryParamsHandling: 'merge'
      }
    );
  }

  getIri$(): Observable<string> {
    return this.activatedRoute.queryParams
      .pipe(
        map(x => x[QueryParamHydraRoutingService.IRI_QUERY_PARAM_NAME])
      );
  }
}
