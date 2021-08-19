import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaAggregateComponent } from './media-object-aggregate.component';

describe('MediaAggregateComponent', () => {
  let component: MediaAggregateComponent;
  let fixture: ComponentFixture<MediaAggregateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaAggregateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaAggregateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
