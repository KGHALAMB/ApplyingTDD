const { appendFile } = require('fs');
const myFunctions = require('./Portfolio.js');

test('initial portfolio can be created and is empty', () => {
    const target = {stocks_list:[]};
    const result = new myFunctions.Portfolio();
    expect(target).toStrictEqual(result.stocks);
});

test('is empty function, true', () => {
    const target = true;
    port = new myFunctions.Portfolio();
    const result = port.isEmpty();
    expect(target).toBe(result);
});

test('is empty function, false', () => {
    const target = false;
    port = new myFunctions.Portfolio();
    port.stocks['stocks_list'].push({ticker: 'APP', shares: 123});
    const result = port.isEmpty(port);
    expect(target).toBe(result);
});

test('find unique ticker symbols', () => {
    const target = 3;
    port = new myFunctions.Portfolio();
    port.stocks['stocks_list'].push({ticker: 'APP', shares: 123});
    port.stocks['stocks_list'].push({ticker: 'GME', shares: 23});
    port.stocks['stocks_list'].push({ticker: 'MCS', shares: 33})
    const result = port.uniqueStock();
    expect(target).toBe(result);
});

test('add an entry with ticker and shares', () => {
    const target = new myFunctions.Portfolio();
    port = new myFunctions.Portfolio();
    target.stocks['stocks_list'].push({ticker: 'APP', shares: 123});
    target.stocks['stocks_list'].push({ticker: 'GME', shares: 23});
    target.stocks['stocks_list'].push({ticker: 'MCS', shares: 33});
    port.addStock('APP', 123);
    port.addStock('GME', 23);
    port.addStock('MCS', 33);
    expect(target.stocks).toStrictEqual(port.stocks);
});

test('sell shares', () => {
    const target = new myFunctions.Portfolio();
    port = new myFunctions.Portfolio();
    port.addStock('APP', 123);
    port.addStock('GME', 23);
    port.addStock('MCS', 33);
    target.stocks['stocks_list'].push({ticker: 'APP', shares: 113});
    target.stocks['stocks_list'].push({ticker: 'GME', shares: 23});
    target.stocks['stocks_list'].push({ticker: 'MCS', shares: 33});
    port.sellShares('APP', 10);
    expect(target.stocks).toStrictEqual(port.stocks);
});

test('list shares for a stock', () => {
    const target = 123;
    port = new myFunctions.Portfolio();
    port.addStock('APP', 123);
    port.addStock('GME', 23);
    port.addStock('MCS', 33);
    const result = port.findSharesByTicker('APP');
    expect(target).toBe(result);
});

test('remove 0 or less stocks from list', () => {
    const target = new myFunctions.Portfolio();
    const port = new myFunctions.Portfolio();
    port.addStock('APP', 123);
    port.addStock('GME', 23);
    port.addStock('MCS', 33);
    port.sellShares('MCS', 33);
    target.addStock('APP', 123);
    target.addStock('GME', 23);
    expect(target.stocks['stocks_list']).toStrictEqual(port.stocks);
});



