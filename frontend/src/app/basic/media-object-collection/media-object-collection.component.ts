import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hydra } from 'alcaeus/web';
import DatasetIndexed from 'rdf-dataset-indexed/dataset';
import { Quad } from '@rdfjs/types';
import { Collection, Resource } from 'alcaeus';

@Component({
  selector: 'app-media-object-collection',
  templateUrl: './media-object-collection.component.html',
  styleUrls: ['./media-object-collection.component.scss']
})
export class MediaObjectCollectionComponent implements OnInit {
  memberLinks: { id: string }[] = []

  constructor(private route: ActivatedRoute) { }

  async load() {
    const mediaTypeId = this.route.snapshot.paramMap.get('mediaTypeId')!;

    const resource = await Hydra.loadResource(mediaTypeId);
    const root = resource!.representation!.root!;
    const collection = root as Collection<Resource<DatasetIndexed.DatasetIndexed<Quad, Quad>>, DatasetIndexed.DatasetIndexed<Quad, Quad>>;
    
    this.memberLinks = collection.member.map(x => {
      return { id: x.id.value };
    })
  }

  ngOnInit(): void {
    this.load();
  }

}
