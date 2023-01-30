
class Portfolio {
    constructor() {
        this.stocks = {stocks_list:[]};
    }

    isEmpty(){
        return this.stocks['stocks_list'].length === 0;
    }
    uniqueStock(){
        return this.stocks['stocks_list'].length;
    }
    
    addStock(ticker_entry, share_entry) {
        this.stocks['stocks_list'].push({ticker: ticker_entry, shares: share_entry})
    }
    
    sellShares(ticker_entry, share_entry) { 
        if((this.stocks['stocks_list'].filter( (port) => port['ticker'] === ticker_entry))[0]['shares'] >= share_entry) {
            (this.stocks['stocks_list'].filter( (port) => port['ticker'] === ticker_entry))[0]['shares'] -= share_entry;
        }
        else{
            throw new Error("ShareSaleException");
        }
        if ((this.stocks['stocks_list'].filter( (port) => port['ticker'] === ticker_entry))[0]['shares'] <= 0) {
            this.stocks = this.stocks['stocks_list'].filter( (port) => port['ticker'] !== ticker_entry); 
        }
        console.log(this.stocks)
    }
    
    findSharesByTicker = (ticker) => {  
       const res = this.stocks['stocks_list'].filter( (stock) => stock['ticker'] === ticker); 
       return res[0]['shares'];
    }
}

exports.Portfolio = Portfolio;