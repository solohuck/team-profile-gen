const intern = require('../lib/intern');

test('getRole() return \"Intern\"', () => {
    const testVal = "Intern";
    const e = new intern("Foo", 1, "testVal@testing.com", "IUPUI");
    expect(e.getRole()).toBe(testVal);
});

test('set school with constructor', () => {
    const testVal = "IUPUI";
    const e = new intern("Foo", 1, "testVal@testing.com", testVal);
    expect(e.school).toBe(testVal);
});

test('get school with getSchool()', () => {
    const testVal = "IUPUI";
    const e = new intern("Foo", 1, "testVal@testing.com", testVal);
    expect(e.getSchool()).toBe(testVal);
});
  