import { ComponentFixture, TestBed } from "@angular/core/testing";
import {Hero} from "./hero"
import { By } from "@angular/platform-browser";
describe('hero component:', () => {
  let component:Hero
  let fixture: ComponentFixture<Hero>
  beforeEach(()=>{
    //1
    TestBed.configureTestingModule({
      imports:[Hero]
    })
    //2
     fixture=TestBed.createComponent(Hero)
    //3
     component= fixture.componentInstance
  })
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should render hero",async ()=>{
    component.hero={id:10,name:"super man",strength:20}
   await fixture.whenStable()
    //access DOM (span)
   let span= fixture.debugElement.query( By.css(".badge") )//1
    expect(span.nativeElement.textContent).toBe("10")
    let div=fixture.nativeElement.querySelector("div") //2
     expect(div.textContent).toContain("super man")
  })
});
