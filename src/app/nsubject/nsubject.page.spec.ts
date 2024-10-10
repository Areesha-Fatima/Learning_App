import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NsubjectPage } from './nsubject.page';

describe('NsubjectPage', () => {
  let component: NsubjectPage;
  let fixture: ComponentFixture<NsubjectPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NsubjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
