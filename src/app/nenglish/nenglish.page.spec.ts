import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NenglishPage } from './nenglish.page';

describe('NenglishPage', () => {
  let component: NenglishPage;
  let fixture: ComponentFixture<NenglishPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NenglishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
