const Engineer = require('../lib/Engineer');

describe('Engineer Class', () => {
    describe('Initialization', () => {
        it('Should create an object with id and name', () => {
            const engineer = new Engineer(123, 'Jared')

            expect(engineer.id).toEqual(123);
            expect(engineer.name).toEqual('Jared');
        });
    });
});