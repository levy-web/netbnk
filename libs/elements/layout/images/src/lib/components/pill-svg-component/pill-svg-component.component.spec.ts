import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PillSvgComponentComponent } from './pill-svg-component.component';

describe('PillSvgComponentComponent', () => {
  let component: PillSvgComponentComponent;
  let fixture: ComponentFixture<PillSvgComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PillSvgComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PillSvgComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
