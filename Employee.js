class Employee {
  /**
   * @param {string} name the employee name.
   * @param {number} age the employee age.
   * @param {number} yearsOfExp the number of employee years of experience.
   */
  constructor(name, age, yearsOfExp) {
    this.name = name;
    this.age = age;
    this.yearsOfExp = yearsOfExp;
  }
  /**
   * Setting salary according to number of years of experience.
   * @return {Number} the salary after setting it.
   ** If 0 < yearsOfExp <= 5 then salary will be 5000
   ** If 5 < yearsOfExp then salary will be 9000
   */
  calculateSalary() {
    this.salary = this.yearsOfExp <= 5 ? 5000 : 9000;
    return this.salary;
  }
  /**
   *
   * @returns {Array} The array containing the set skills.
   * @param {...String} skills The skills to be set for the object.
   **/
  setSkills(...skills) {
    this.skills = skills;
    return this.skills;
  }
  

  /**
   * Requests time off for the employee by interacting with the HR system.
   *
   * @param {number} days - Number of days requested for time off.
   * @param {Object} hrSystem - The HR system class.
   * @param {function} hrSystem.validateDays - Checks if requested days are allowed for that employee.
   * @param {function} hrSystem.submitRequest - Submits the actual time off request.
   * @returns {string} Status message.
   */
  requestTimeOff(days, hrSystem) {
    if ( ! hrSystem.validateDays(days)) {
      return "Time off request denied: invalid number of days.";
    }
    hrSystem.submitRequest(this.name, days);
    return `Time off request submitted successfully`;
  }
}


module.exports = Employee;





