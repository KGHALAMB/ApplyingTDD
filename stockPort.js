
function createPortfolio(){
    return(stocks = {stocks_list:[]});
}

function isEmpty(stocks){
    return stocks['stocks_list'].length === 0;
}

function uniqueStock(stocks){
    return stocks['stocks_list'].length;
}

function addStock(port, ticker_entry, share_entry) {
    port['stocks_list'].push({ticker: ticker_entry, shares: share_entry})
}

function sellShares(port, ticker_entry, share_entry) { 
    //port['stocks_list'].filter( (port) => port['ticker'] === ticker_entry); 
    for (var i = 0; i < port['stocks_list'].length; i++) {
        if(port['stocks_list'][i]['ticker'] === ticker_entry) {
            port['stocks_list'][i]['shares'] -= share_entry;
            return;
        }
    }
}

const findSharesByTicker = (port, ticker) => {  
   res = port['stocks_list'].filter( (stock) => stock['ticker'] === ticker); 
   return res[0]['shares'];
}
exports.createPortfolio = createPortfolio;
exports.isEmpty = isEmpty;
exports.uniqueStock = uniqueStock;
exports.addStock = addStock;
exports.sellShares = sellShares;
exports.findSharesByTicker= findSharesByTicker;
