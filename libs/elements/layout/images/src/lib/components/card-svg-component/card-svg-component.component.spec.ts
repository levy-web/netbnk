import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardSvgComponentComponent } from './card-svg-component.component';

describe('CardSvgComponentComponent', () => {
  let component: CardSvgComponentComponent;
  let fixture: ComponentFixture<CardSvgComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSvgComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardSvgComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
