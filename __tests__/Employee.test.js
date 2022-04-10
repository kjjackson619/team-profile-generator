const Employee = require('../lib/Employee');

describe('Employee Class', () => {
    describe('Initialization', () => {
        it('Should create object with an id and name', () => {
            const employee = new Employee(123, 'Jared')

            expect(employee.id).toEqual(123);
            expext(employee.name).toEqual('Jared');
        });
    });

});


