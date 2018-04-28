const comtravis = require('../comtravis')

test('run w/o parameters gives help message', () => {
    expect(comtravis()).toBe(true)
})