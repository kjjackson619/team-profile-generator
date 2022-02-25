const Employee = require('../lib/Employee');

test('creates a new employee', () => {
    const employee = new Employee('name');

    expect(employee.name).toBe('name');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.name.length).toBeGreaterThan(0);
});