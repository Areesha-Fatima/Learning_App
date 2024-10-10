import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NchemistryPage } from './nchemistry.page';

describe('NchemistryPage', () => {
  let component: NchemistryPage;
  let fixture: ComponentFixture<NchemistryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NchemistryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
