import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaTypeCollectionComponent } from './media-type-collection.component';

describe('MediaTypeCollectionComponent', () => {
  let component: MediaTypeCollectionComponent;
  let fixture: ComponentFixture<MediaTypeCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaTypeCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaTypeCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
