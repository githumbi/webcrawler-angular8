import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomtextComponent } from './randomtext.component';

describe('RandomtextComponent', () => {
  let component: RandomtextComponent;
  let fixture: ComponentFixture<RandomtextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomtextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
