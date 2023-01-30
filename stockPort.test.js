const { appendFile } = require('fs');
const myFunctions = require('./stockPort.js');

test('initial portfolio can be created and is empty', () => {
    const target = {stocks_list:[]};
    const result = myFunctions.createPortfolio();
    expect(target).toStrictEqual(result);
});

test('is empty function, true', () => {
    const target = true;
    port = myFunctions.createPortfolio();
    const result = myFunctions.isEmpty(port);
    expect(target).toBe(result);
});

test('is empty function, false', () => {
    const target = false;
    port = myFunctions.createPortfolio();
    port['stocks_list'].push({ticker: 'APP', shares: 123})
    const result = myFunctions.isEmpty(port);
    expect(target).toBe(result);
});

