const intern = require('../Lib/intern');

test('getRole() return \"Intern\"', () => {
    const testVal = "Intern";
    const e = new intern("test", 1, "testVal@testing.com", "IUPUI");
    expect(e.getRole()).toBe(testVal);
});

test('set school with constructor', () => {
    const testVal = "IUPUI";
    const e = new intern("test", 1, "testVal@testing.com", testVal);
    expect(e.school).toBe(testVal);
});

test('get school with getSchool()', () => {
    const testVal = "IUPUI";
    const e = new intern("test", 1, "testVal@testing.com", testVal);
    expect(e.getSchool()).toBe(testVal);
});
  