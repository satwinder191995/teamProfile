// Manager class tests start here
const manager = require('../lib/manager.js');

test('creates a manager object', () => {
    const teamManager = new manager('satwinder',1234,'satwinder47@outlook.com','4fd7');
    expect(teamManager.title).toBe("Manager");
    expect(teamManager.name).toEqual(expect.any(String));
    expect(teamManager.name.length).toBeGreaterThan(5);
    expect(teamManager.id).toEqual(expect.any(Number));
    expect(teamManager.email).toEqual(expect.any(String));
    expect(teamManager.email.length).toBeGreaterThan(7);
    expect(teamManager.extra).toBe("Office Number");
    expect(teamManager.extraValue).toEqual(expect.any(String));
    expect(teamManager.extraValue.length).toBeGreaterThan(3);
  
  });
  test("getRole() should return Manager", () => {
    const test = "Manager";
    const teamManager = new manager('satwinder',1234,'satwinder47@outlook.com','4fd7');
    expect(teamManager.getRole()).toBe(test);
  });
  test("getOfficeNumber should return office number", () => {
    const test = '4fd7';
    const teamManager = new manager('satwinder',1234,'satwinder47@outlook.com','4fd7');
    expect(teamManager.getOfficeNumber()).toBe(test);
  });