import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMediaImagesComponent } from './my-media-images.component';

describe('MyMediaImagesComponent', () => {
  let component: MyMediaImagesComponent;
  let fixture: ComponentFixture<MyMediaImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMediaImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMediaImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
