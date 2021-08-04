import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCubeComponent } from './preview-cube.component';

describe('PreviewCubeComponent', () => {
  let component: PreviewCubeComponent;
  let fixture: ComponentFixture<PreviewCubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewCubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
