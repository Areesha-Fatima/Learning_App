import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NislamiatPage } from './nislamiat.page';

describe('NislamiatPage', () => {
  let component: NislamiatPage;
  let fixture: ComponentFixture<NislamiatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NislamiatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
