import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resource } from '../../../model';

@Injectable()
export abstract class ResourceFetchService {
  abstract getResource$(): Observable<Resource | null>;
}
