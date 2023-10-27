import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StackedSvgComponentComponent } from './stacked-svg-component.component';

describe('StackedSvgComponentComponent', () => {
  let component: StackedSvgComponentComponent;
  let fixture: ComponentFixture<StackedSvgComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StackedSvgComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StackedSvgComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
