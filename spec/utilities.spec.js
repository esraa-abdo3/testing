const { random } = require("../utilities");
const { capitalizeTextFirstChar } = require("../utilities");


describe("random function",()=>{
      it("should return a number",()=>{
        let result = random(1,10);
         expect(typeof result).toBe("number");
      })
      it("should return value within range",()=>{
        let result = random(5,7);
         expect( result).toBeGreaterThanOrEqual(5);
          expect( result).toBeLessThanOrEqual(7);
      })
       it("should return NaN when passing one parameter",()=>{
        let result = random(3);
         expect( result).toBeNaN();
      })
})

describe("capitalizeTextFirstChar function",()=>{
    it("should return a string",()=>{
        let result = capitalizeTextFirstChar("my name is mariam");
         expect(typeof result).toBe("string");
      })
      it("should capitalize first letter",()=>{
        let result = capitalizeTextFirstChar("my name is mariam");
         expect( result).toBe("My Name Is Mariam");
      })
      it("should throw error if the parameter is not string type",()=>{
        expect(function(){ capitalizeTextFirstChar(12) }).toThrow()
      })
})