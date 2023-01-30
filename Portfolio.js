class Portfolio {
  constructor(){
    this.stocks = [];
    this.shares = [];
  }

  countStocks(){
    return this.stocks.length;
  }

  isEmpty(){
    if(this.stocks.length == 0){
      return true;
    }
    return false;
  }

  buyStock(name, amt){
    this.stocks.push(name);
    this.shares.push(amt);
  }

  sellStock(name, amt){
    var temp = this.stocks.indexOf(name);
    if(temp != -1){
      if(this.shares[temp] > amt){
        //CASE: Stock has shares to sell
        this.shares[temp] = this.shares[temp] - amt;
      }
      else if(this.shares[temp] == amt){
        //CASE: all shares have been sold, remove stocks from section
        this.shares.splice(temp, 1);
        this.stocks.splice(temp, 1); 
      }
      else{
        throw new Error('ShareSaleException');
      }
    }
  }

  getShares(name){
    var temp = this.stocks.indexOf(name);
    if(temp != -1){
      return this.shares[temp];
    }
  }

}

module.exports = {Portfolio};

