import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaTypeAggregateComponent } from './media-type-aggregate.component';

describe('MediaTypeAggregateComponent', () => {
  let component: MediaTypeAggregateComponent;
  let fixture: ComponentFixture<MediaTypeAggregateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaTypeAggregateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaTypeAggregateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
