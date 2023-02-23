const employee = require('../lib/employee');

test('instantiate employee instance', () => {
    const e = new employee();
    expect(typeof(e)).toBe('object');
});

test('set name with constructor aguments', () => {
    const name = 'jacob';
    const e = new employee(name);
    expect(e.name).toBe(name);
});

test('set email with constructor argument', () => {
    const testVal = "testVal@testing.com";
    const e = new employee("Foo", 1, testVal);
    expect(e.email).toBe(testVal);
  });

test('get email with getEmail()', () => {
    const testVal = "testVal@testing.com";
    const e = new employee("Foo", 1, testVal);
    expect(e.getEmail()).toBe(testVal);
  });

test('set id with constructor argument', () => {
    const testVal = 100;
    const e = new employee("Foo", testVal);
    expect(e.id).toBe(testVal);
  });

test('getRole() return \"Employee\"', () => {
    const testVal = "Employee";
    const e = new employee("jacob", 1, "testVal@testing.com");
    expect(e.getRole()).toBe(testVal);
  });

test('get id with getId()', () => {
    const testVal = 100;
    const e = new employee("Foo", testVal);
    expect(e.getId()).toBe(testVal);
  });
  
  
