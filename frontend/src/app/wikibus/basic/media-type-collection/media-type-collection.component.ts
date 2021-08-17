import { Component, OnInit } from '@angular/core';
import { Hydra } from 'alcaeus/web'
import { ResourceIdentifier, SupportedProperty } from 'alcaeus';

interface MediaTypeLink {
  id?: string
  title?: string
}

@Component({
  selector: 'app-media-type-collection',
  templateUrl: './media-type-collection.component.html',
  styleUrls: ['./media-type-collection.component.scss']
})
export class MediaTypeCollectionComponent implements OnInit {

  mediaTypeGroup: MediaTypeLink[] = []

  async load() {
    const resource = await Hydra.loadResource("https://sources.wikibus.org");
    const root = resource.representation!.root!;

    const links = root.getLinks().map(value => {
      return { id: value.resources[0].id.value, title: value.supportedProperty.title }
    });

    this.mediaTypeGroup = links;
  }

  ngOnInit(): void {
    this.load();
  }

}
