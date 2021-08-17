import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hydra } from 'alcaeus/web';
import DatasetIndexed from 'rdf-dataset-indexed/dataset';
import { Quad } from '@rdfjs/types';
import { Collection, Resource } from 'alcaeus';

@Component({
  selector: 'app-media-object-aggregate',
  templateUrl: './media-object-aggregate.component.html',
  styleUrls: ['./media-object-aggregate.component.scss']
})
export class MediaObjectAggregateComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  async loadResource() {
    const mediaId = this.route.snapshot.paramMap.get('mediaId')!;
    const resource = await Hydra.loadResource(mediaId);
    const root = resource!.representation!.root!;

    console.log('...');
  }

  ngOnInit(): void {
  
  }

}
