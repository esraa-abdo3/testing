import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { HeroServiceForLab } from './hero.lab.service';
import { IHero } from '../../models/ihero';

describe("hero service (for lab) http testing:", () => {

  let service: HeroServiceForLab;
  let httpTesting: HttpTestingController;

  const heroesUrl = 'http://localhost:3000/heroes';

  let fakeHero: IHero = {
    id: 1,
    name: "super man",
    strength: 100
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(HeroServiceForLab);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  it("should make a GET request to fetch hero by id and emit the returned hero", () => {
    service.getHero(1).subscribe({
      next: (data) => {
        expect(data).toEqual(fakeHero);
      }
    });

    const req = httpTesting.expectOne(`${heroesUrl}/1`);
    expect(req.request.method).toBe("GET");
    req.flush(fakeHero);
  });

  it("should make a PUT request to update a hero and emit the updated hero", () => {
    service.updateHero(fakeHero).subscribe({
      next: (data) => {
        expect(data).toEqual(fakeHero);
      }
    });

    const req = httpTesting.expectOne(`${heroesUrl}/${fakeHero.id}`);
    expect(req.request.method).toBe("PUT");
    expect(req.request.body).toEqual(fakeHero);

    req.flush(fakeHero);
  });

  afterEach(() => {
    httpTesting.verify();
  });

});
