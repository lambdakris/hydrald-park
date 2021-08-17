import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaObjectFormComponent } from './media-object-form.component';

describe('MediaObjectFormComponent', () => {
  let component: MediaObjectFormComponent;
  let fixture: ComponentFixture<MediaObjectFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaObjectFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaObjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
