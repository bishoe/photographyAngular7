import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexalbumComponent } from './indexalbum.component';

describe('IndexalbumComponent', () => {
  let component: IndexalbumComponent;
  let fixture: ComponentFixture<IndexalbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexalbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexalbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
