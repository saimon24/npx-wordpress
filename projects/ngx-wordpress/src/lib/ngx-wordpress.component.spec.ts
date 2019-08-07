import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxWordpressComponent } from './ngx-wordpress.component';

describe('NgxWordpressComponent', () => {
  let component: NgxWordpressComponent;
  let fixture: ComponentFixture<NgxWordpressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxWordpressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxWordpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
