import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListforumComponent } from './listforum.component';

describe('ListforumComponent', () => {
  let component: ListforumComponent;
  let fixture: ComponentFixture<ListforumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListforumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
