import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TphysicsPage } from './tphysics.page';

describe('TphysicsPage', () => {
  let component: TphysicsPage;
  let fixture: ComponentFixture<TphysicsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TphysicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
