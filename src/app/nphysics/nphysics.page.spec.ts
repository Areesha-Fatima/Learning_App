import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NphysicsPage } from './nphysics.page';

describe('NphysicsPage', () => {
  let component: NphysicsPage;
  let fixture: ComponentFixture<NphysicsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NphysicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
