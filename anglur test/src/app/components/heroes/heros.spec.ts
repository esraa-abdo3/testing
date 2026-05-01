import { ComponentFixture, TestBed } from "@angular/core/testing"
import {Heroes} from "./heroes"
import { Hero } from "../hero/hero"
import { HeroService } from "../../services/hero-service/hero.service"
import { Mocked } from "vitest"
import { of } from "rxjs"
import { By } from "@angular/platform-browser"
describe('heroes component', () => {
  let component:Heroes
  let fixture: ComponentFixture<Heroes>
  let heroServiceFake: Partial<Mocked<HeroService>>
  let fakeHeroes=[
    {id:1,name:"super man",strength:20},
    {id:10,name:"bat man",strength:20},
  ]
  beforeEach(()=>{
    heroServiceFake= {
    getHeroes:vi.fn( ()=>of(fakeHeroes) ),
    addHero:vi.fn(),
    deleteHero:vi.fn(),
  }

    //1
    TestBed.configureTestingModule({
      imports:[Heroes,Hero],
      providers:[
        {provide:HeroService, useValue: heroServiceFake }
      ]
    })
    //2
     fixture=TestBed.createComponent(Heroes)
    //3
     component= fixture.componentInstance
  })
  it('should create', () => {
    expect(component).toBeTruthy();
  });
    it('should render heroes', async () => {
    component.ngOnInit()
      expect(component.heroes()).toHaveLength(fakeHeroes.length)
      expect(heroServiceFake.getHeroes).toHaveBeenCalled()

      await fixture.whenStable()
      let liTags= fixture.debugElement.queryAll(By.css("li"))
      expect(liTags.length).toBe(fakeHeroes.length)

      let children= fixture.debugElement.queryAll(By.directive(Hero))
      expect(children[0].nativeElement.querySelector("div").textContent).toContain(fakeHeroes[0].name)
  });
})
