class Portfolio{
    // Assuming we receive a collection of stocks while creating a new portfolio. 
    constructor(stocks){
        this.stocks = stocks;
    }

    // adding a new stock to portfolio
    addStock(stock){
        this.stocks.push(stock);
    }

    // amount of days between dates method
    days(start_date, end_date){
        let difference = end_date.getTime() - start_date.getTime();
        days = difference / (1000 * 3600 * 24);
        return days;
    }

    //profit method
    profit(start_date, end_date){
        let profit = 0;
        this.stocks.forEach(stock => {
            // Asssuming price is a stock method that receive a date and returns its price. 
            profit += stock.price(end_date) - stock.price(start_date);
        });
        let annualized_profit = 365 / this.days(start_date, end_date) * profit;
        return annualized_profit;
    }

}