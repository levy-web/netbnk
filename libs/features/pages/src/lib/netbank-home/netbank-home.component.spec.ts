import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NetbankHomeComponent } from './netbank-home.component';

describe('NetbankHomeComponent', () => {
  let component: NetbankHomeComponent;
  let fixture: ComponentFixture<NetbankHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NetbankHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NetbankHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
