const Employee = require("../Employee");

describe("calculate salary", () => {
  it("should return 5000 if yearsOfExp <= 5", () => {
    let emp = new Employee("esraa", 23, 1);
    let result = emp.calculateSalary();
    expect(result).toBe(5000);
  });
  it("should return 9000 if yearsOfExp > 5", () => {
    let emp = new Employee("esraa", 30, 7);
    let result = emp.calculateSalary();
    expect(result).toBe(9000);
  });
});

describe("set skills", () => {
  let emp, result;
  beforeEach(() => {
    emp = new Employee("esraa", 23, 1);
    result = emp.setSkills("JS", "Node");
  });
  it("should return array of skills", () => {
    expect(typeof result).toBe("object");
  });
  it("should return correct skills array", () => {
    expect(result).toEqual(["JS", "Node"]);
  });
});

describe("requestTimeOff", () => {
  it("should deny request if validateDays returns false", () => {
    let emp = new Employee("esraa", 23, 1);
    let hrSystem = {
      validateDays: jasmine.createSpy().and.returnValue(false),
      submitRequest: jasmine.createSpy(),
    };
    let result = emp.requestTimeOff(10, hrSystem);
    expect(result).toBe("Time off request denied: invalid number of days.");
    expect(hrSystem.submitRequest).not.toHaveBeenCalled();
  });
  
  it("should submit request if validateDays returns true", () => {
    let emp = new Employee("esraa", 23, 1);
    let hrSystem = {
      validateDays: jasmine.createSpy().and.returnValue(true),
      submitRequest: jasmine.createSpy()
    };
    let result = emp.requestTimeOff(5, hrSystem);
    expect(result).toBe("Time off request submitted successfully");
    expect(hrSystem.submitRequest).toHaveBeenCalledWith("esraa", 5);
  });

});
