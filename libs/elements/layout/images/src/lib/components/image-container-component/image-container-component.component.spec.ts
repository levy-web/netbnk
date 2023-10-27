import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageContainerComponentComponent } from './image-container-component.component';

describe('ImageContainerComponentComponent', () => {
  let component: ImageContainerComponentComponent;
  let fixture: ComponentFixture<ImageContainerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageContainerComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageContainerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
