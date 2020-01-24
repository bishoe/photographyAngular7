import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAllAlbumComponent } from './index-all-album.component';

describe('IndexAllAlbumComponent', () => {
  let component: IndexAllAlbumComponent;
  let fixture: ComponentFixture<IndexAllAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexAllAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexAllAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
