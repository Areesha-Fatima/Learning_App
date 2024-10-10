import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NmathsPage } from './nmaths.page';

describe('NmathsPage', () => {
  let component: NmathsPage;
  let fixture: ComponentFixture<NmathsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NmathsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
