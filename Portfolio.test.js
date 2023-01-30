const {Portfolio} = require("./Portfolio.js");

describe('Test to be done on Portfolio', () => {

  beforeEach(() => {const port = new Portfolio()});

  test("Test: Portfolio isempty()", () => {
    const port = new Portfolio();
    var val = port.isEmpty();
    expect(val).toBeTruthy();
  });

  test("Test: Portfolio isempty() when a stock exists", () => {
    const port = new Portfolio();
    port.buyStock('PG&E', 2);
    var val = port.isEmpty();
    expect(val).toBeFalsy();
  });

  test("Test: Number of Portfolio Stocks", () => {
    const port = new Portfolio();
    var val = port.countStocks();
    expect(val).toBe(0);
  });

  test("Test: Buying of Portfolio Stocks", () => {
    const port = new Portfolio();
    port.buyStock('FTX', 3);
    port.buyStock('PG&E', 2);
    var val = port.countStocks();
    expect(val).toBe(2);
  });

  test("Test: Selling of Portfolio Stocks", () => {
    const port = new Portfolio();
    port.buyStock('FTX', 10);
    port.buyStock('PG&E', 2);
    port.sellStock('FTX', 3);
    var val = port.getShares('FTX');
    expect(val).toBe(7);
  });

  test("Test: Symbol gets removed when all shares are sold", () => {
    const port = new Portfolio();
    port.buyStock('FTX', 10);
    port.buyStock('PG&E', 2);
    port.sellStock('FTX', 10);
    var val = port.getShares('PG&E');
    expect(val).toBe(2);
    var valTwo = port.countStocks();
    expect(valTwo).toBe(1) 
  });

  test("Test: Raise error when too many shares are attempted to be sold", () => {
    const port = new Portfolio();
    port.buyStock('FTX', 10);
    port.buyStock('PG&E', 2);
    expect(() => {port.sellStock('FTX', 12);}).toThrow('ShareSaleException'); 
  });
});