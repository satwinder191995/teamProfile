// Intern class tests start here
const intern = require('../lib/intern.js');

test('creates a intern object', () => {
    const teamIntern = new intern('satwinder',1234,'satwinder47@outlook.com','UoFT');
    expect(teamIntern.title).toBe("Intern");
    expect(teamIntern.name).toEqual(expect.any(String));
    expect(teamIntern.name.length).toBeGreaterThan(5);
    expect(teamIntern.id).toEqual(expect.any(Number));
    expect(teamIntern.email).toEqual(expect.any(String));
    expect(teamIntern.email.length).toBeGreaterThan(7);
    expect(teamIntern.extra).toBe("School");
    expect(teamIntern.extraValue).toEqual(expect.any(String));
    expect(teamIntern.extraValue.length).toBeGreaterThan(3);
  
  });
  test("getRole() should return Manager", () => {
    const test = "Intern";
    const teamIntern = new intern('satwinder',1234,'satwinder47@outlook.com','UoFT');
    expect(teamIntern.getRole()).toBe(test);
  });
  test("getSchool should return school name", () => {
    const test = "UoFT";
    const teamIntern = new intern('satwinder',1234,'satwinder47@outlook.com','UoFT');
    expect(teamIntern.getSchool()).toBe(test);
  });