import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMediaVideosComponent } from './my-media-videos.component';

describe('MyMediaVideosComponent', () => {
  let component: MyMediaVideosComponent;
  let fixture: ComponentFixture<MyMediaVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMediaVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMediaVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
