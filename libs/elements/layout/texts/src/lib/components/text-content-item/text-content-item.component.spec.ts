import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextContentItemComponent } from './text-content-item.component';

describe('TextContentItemComponent', () => {
  let component: TextContentItemComponent;
  let fixture: ComponentFixture<TextContentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextContentItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextContentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
