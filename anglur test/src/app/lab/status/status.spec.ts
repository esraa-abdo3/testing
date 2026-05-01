import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Status } from './status';
import { By } from '@angular/platform-browser';

describe('Status component', () => {
  let fixture: ComponentFixture<Status>;
  let component: Status;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Status]
    });

    fixture = TestBed.createComponent(Status);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render initial status as "♥ 0" and button not liked', () => {
    const button = fixture.debugElement.query(By.css('#statusBtn')).nativeElement;

    expect(button.textContent).toContain('0');
    expect(button.classList).not.toContain('liked');
  });

  it('should increment status to 1 and mark button as liked when clicked once', () => {
    const button = fixture.debugElement.query(By.css('#statusBtn')).nativeElement;
    button.click();
    fixture.detectChanges();

    expect(button.textContent).toContain('1');
    expect(button.classList).toContain('liked');
  });

  it('should decrement status back to 0 and remove liked class when clicked twice', () => {
    const button = fixture.debugElement.query(By.css('#statusBtn')).nativeElement;
    button.click();
    button.click();
    fixture.detectChanges();

    expect(button.textContent).toContain('0');
    expect(button.classList).not.toContain('liked');
  });

});
