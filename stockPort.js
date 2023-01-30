
function createPortfolio(){
    return(stocks = {stocks_list:[]});
}

function isEmpty(stocks){
    return stocks['stocks_list'].length === 0;
}
/*
function addStock(stock){
    stock['id'] = uniqueIdGenerator();
    stocks['stocks_list'].push(stock);
}

const deleteStockById = (id) => { 
    return stocks['stocks_list'].filter( (id) => stocks['id'] !== id); 
}

function uniqueIdGenerator(){
    id = Math.floor(100000 + Math.random() * 900000);
    for (let i = 0; i < users['users_list'].length; i++) {
        if (id === users['users_list'][i]['id']) {
            i = 0;
            id = Math.floor(100000 + Math.random() * 900000);
        }
    }
    return id.toString()
}*/
exports.createPortfolio = createPortfolio;
exports.isEmpty = isEmpty;