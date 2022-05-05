// Enginner class tests start here
const engineer = require('../lib/engineer.js');

test('creates an engineer object', () => {
    const teamEngineer = new engineer('satwinder',1234,'satwinder47@outlook.com','4fd7');
    expect(teamEngineer.title).toBe("Engineer");
    expect(teamEngineer.name).toEqual(expect.any(String));
    expect(teamEngineer.name.length).toBeGreaterThan(5);
    expect(teamEngineer.id).toEqual(expect.any(Number));
    expect(teamEngineer.email).toEqual(expect.any(String));
    expect(teamEngineer.email.length).toBeGreaterThan(7);
    expect(teamEngineer.extra).toBe("Github");
    expect(teamEngineer.extraValue).toEqual(expect.any(String));
    expect(teamEngineer.extraValue.length).toBeGreaterThan(3);
  
  });