import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TpstPage } from './tpst.page';

describe('TpstPage', () => {
  let component: TpstPage;
  let fixture: ComponentFixture<TpstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TpstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
