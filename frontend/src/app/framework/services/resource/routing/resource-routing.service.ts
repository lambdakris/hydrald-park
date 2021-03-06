import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export abstract class ResourceRoutingService {
  abstract route(iri: string): void;
  abstract getIri$(): Observable<string>;
}
