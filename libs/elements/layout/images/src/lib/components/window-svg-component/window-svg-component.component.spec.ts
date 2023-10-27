import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WindowSvgComponentComponent } from './window-svg-component.component';

describe('WindowSvgComponentComponent', () => {
  let component: WindowSvgComponentComponent;
  let fixture: ComponentFixture<WindowSvgComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WindowSvgComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WindowSvgComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
