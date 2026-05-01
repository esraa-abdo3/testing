import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MessageService } from '../message/message.service';
import { HeroService } from './hero.service';

describe('hero service:', () => {
  let httpTesting:HttpTestingController
  let messageServiceFake={
    add:vi.fn()
  }
  let service:HeroService
  const heroesUrl = 'http://localhost:3000/heroes'; 
  let fakeHeroes=[
    {id:1,name:"super man",strength:20},
    {id:10,name:"bat man",strength:20},
  ]
  beforeEach(() => {
    
    TestBed.configureTestingModule({
      providers: [
        // ... other test providers
        provideHttpClient(),
        provideHttpClientTesting(),
        {provide:MessageService,useValue:messageServiceFake}
      ],
    });
     httpTesting = TestBed.inject(HttpTestingController);
     service=TestBed.inject(HeroService)
  });
  it('should get all heroes by getHeroes function ', () => {
    
    service.getHeroes().subscribe({next:(data)=>{
      expect(data.length).toBe(fakeHeroes.length)
    }})

   const testRequest= httpTesting.expectOne(heroesUrl)
   expect(testRequest.request.method).toBe("GET")

   testRequest.flush(fakeHeroes)
  });
  it('should add hero by addHEro function', () => {
    let heroFake=fakeHeroes[0]
    service.addHero(heroFake).subscribe({next:data=>{
      expect(data.name).toBe(heroFake.name)
    }})

   let testRequest= httpTesting.expectOne(heroesUrl)
   expect(testRequest.request.method).toBe("POST")
   expect(testRequest.request.body).toEqual(heroFake)

   testRequest.flush(heroFake)
  });
  afterEach(() => {
  // Verify that none of the tests make any extra HTTP requests.
  httpTesting.verify();
});
});
