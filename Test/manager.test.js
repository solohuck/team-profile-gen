const manager = require("../Lib/manager");



test('getRole() return "Manager"', () => {
    const testVal = "Manager";
    const e = new manager("test", 1, "testVal@testing.com", 100);
    expect(e.getRole()).toBe(testVal);
});


test('set office number with constructor argument', () => {
    const testVal = 100;
    const e = new manager("test", 1, "testVal@testing.com", testVal);
    expect(e.officeNumber).toBe(testVal);
});

test('get office number with getOffice()', () => {
    const testVal = 100;
    const e = new manager("test", 1, "testVal@testing.com", testVal);
    expect(e.getOfficeNumber()).toBe(testVal);
});
  
  