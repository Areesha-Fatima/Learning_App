import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TmathsPage } from './tmaths.page';

describe('TmathsPage', () => {
  let component: TmathsPage;
  let fixture: ComponentFixture<TmathsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TmathsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
