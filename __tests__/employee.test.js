// Employee class tests start here
const employee = require('../lib/employee.js');

test('creates an employee object', () => {
    const teamEmployee = new employee('satwinder',1234,'satwinder47@outlook.com');
    expect(teamEmployee .name).toEqual(expect.any(String));
    expect(teamEmployee .name.length).toBeGreaterThan(5);
    expect(teamEmployee.id).toEqual(expect.any(Number));
    expect(teamEmployee .email).toEqual(expect.any(String));
    expect(teamEmployee .email.length).toBeGreaterThan(7);
  
  });
  test("getName() should return name satwinder ", () => {
    const test = "satwinder";
    const teamEmployee = new employee('satwinder',1234,'satwinder47@outlook.com');
    expect(teamEmployee.getName()).toBe(test);
  });
  test("getId() should return id 1234 ", () => {
    const test = 1234;
    const teamEmployee = new employee('satwinder',1234,'satwinder47@outlook.com');
    expect(teamEmployee.getId()).toBe(test);
  });
  test("getEmail() should return email satwinder47@outlook.com ", () => {
    const test = "satwinder47@outlook.com";
    const teamEmployee = new employee('satwinder','1234','satwinder47@outlook.com');
    expect(teamEmployee.getEmail()).toBe(test);
  });
  test("getRole() should return Employee", () => {
    const test = "Employee";
    const teamEmployee = new employee('satwinder',1234,'satwinder47@outlook.com');
    expect(teamEmployee.getRole()).toBe(test);
  });