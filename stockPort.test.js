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
    port['stocks_list'].push({ticker: 'APP', shares: 123});
    const result = myFunctions.isEmpty(port);
    expect(target).toBe(result);
});

test('find unique ticker symbols', () => {
    const target = 3;
    port = myFunctions.createPortfolio();
    port['stocks_list'].push({ticker: 'APP', shares: 123});
    port['stocks_list'].push({ticker: 'GME', shares: 23});
    port['stocks_list'].push({ticker: 'MCS', shares: 33})
    const result = myFunctions.uniqueStock(port);
    expect(target).toBe(result);
});

test('add an entry with ticker and shares', () => {
    const target = myFunctions.createPortfolio();
    port = myFunctions.createPortfolio();
    target['stocks_list'].push({ticker: 'APP', shares: 123});
    target['stocks_list'].push({ticker: 'GME', shares: 23});
    target['stocks_list'].push({ticker: 'MCS', shares: 33});
    myFunctions.addStock(port, 'APP', 123);
    myFunctions.addStock(port, 'GME', 23);
    myFunctions.addStock(port, 'MCS', 33);
    expect(target).toStrictEqual(port);
});

test('sell shares', () => {
    const target = myFunctions.createPortfolio();
    port = myFunctions.createPortfolio();
    myFunctions.addStock(port, 'APP', 123);
    myFunctions.addStock(port, 'GME', 23);
    myFunctions.addStock(port, 'MCS', 33);
    target['stocks_list'].push({ticker: 'APP', shares: 113});
    target['stocks_list'].push({ticker: 'GME', shares: 23});
    target['stocks_list'].push({ticker: 'MCS', shares: 33});
    myFunctions.sellShares(port, 'APP', 10);
    expect(target).toStrictEqual(port);
});

test('list shares for a stock', () => {
    const target = 123;
    port = myFunctions.createPortfolio();
    myFunctions.addStock(port, 'APP', 123);
    myFunctions.addStock(port, 'GME', 23);
    myFunctions.addStock(port, 'MCS', 33);
    const result = myFunctions.findSharesByTicker(port, 'APP');
    expect(target).toBe(result);
});



