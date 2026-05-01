import { ComponentFixture, TestBed } from "@angular/core/testing";
import {Counter} from "./counter"
import { By } from "@angular/platform-browser";
describe('counter component: ', () => {
  let fixture:ComponentFixture<Counter>
  let component:Counter
  beforeEach(/* async */ ()=>{
   /* await */ TestBed.configureTestingModule({
      imports:[Counter]
    })/* .compileComponents() */

   fixture= TestBed.createComponent(Counter)
    component= fixture.componentInstance
  })
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should render counter =0 ",async ()=>{
    await fixture.whenStable()
    //access <p>
    let p= fixture.debugElement.query(By.css("p"))
    //assert
    expect(p.nativeElement.textContent).toContain("0")
  })
  it('should render counter after clicking btn+', async () => {
    //access btn
    let btnIncrease=fixture.debugElement.query(By.css("#increment"))
    let btnDecrease=fixture.debugElement.query(By.css("#decrement"))
    //click btn
    btnIncrease.triggerEventHandler("click")
    btnIncrease.triggerEventHandler("click")
    btnIncrease.triggerEventHandler("click")

    btnDecrease.triggerEventHandler("click")
    btnDecrease.triggerEventHandler("click")

   await fixture.whenStable()
    //access p
    let p= fixture.debugElement.query(By.css("p"))

    //assert counter+
    expect(component.counter()).toBe(1)
    expect(p.nativeElement.textContent).toContain("1")

  });
});
