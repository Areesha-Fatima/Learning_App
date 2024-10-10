import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TchemistryPage } from './tchemistry.page';

describe('TchemistryPage', () => {
  let component: TchemistryPage;
  let fixture: ComponentFixture<TchemistryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TchemistryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
