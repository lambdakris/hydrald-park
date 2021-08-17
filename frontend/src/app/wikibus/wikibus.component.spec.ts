import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikibusComponent } from './wikibus.component';

describe('WikibusComponent', () => {
  let component: WikibusComponent;
  let fixture: ComponentFixture<WikibusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WikibusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WikibusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
