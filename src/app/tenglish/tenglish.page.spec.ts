import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TenglishPage } from './tenglish.page';

describe('TenglishPage', () => {
  let component: TenglishPage;
  let fixture: ComponentFixture<TenglishPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TenglishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
