import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resource } from "alcaeus";
import { Hydra } from 'alcaeus/web';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable()
export class HydraResourceProvider
{
    private baseUri: string = "https://sources.wikibus.org/";

    private $resource: Subject<Resource> =
        new ReplaySubject<Resource>(1);

    constructor(
        currentRoute: ActivatedRoute
    )
    {
        currentRoute.url.subscribe(async (uriSegments) => {
            console.log(uriSegments);

            const resourceUri = this.baseUri + uriSegments.join("/");
            const { representation } = await Hydra.loadResource(resourceUri);

            if (!representation || !representation.root)
            {
                return;
            }

            this.$resource.next(representation.root);
        });
    }

    public GetResourceObservable() {
        return this.$resource;
    }

    public async loadResource(
        uri: string): Promise<Resource>
    {
        const fullUri = this.baseUri + uri;

        var { representation } = await Hydra.loadResource(fullUri);
        if (!representation || !representation.root)
        {
            throw new Error("Unable to load resource");
        }

        return representation.root;
    }
}
