import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TsubjectPage } from './tsubject.page';

describe('TsubjectPage', () => {
  let component: TsubjectPage;
  let fixture: ComponentFixture<TsubjectPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TsubjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
