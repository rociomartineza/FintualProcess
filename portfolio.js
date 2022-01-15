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
        // Asssuming price is a stock method that receive a date and returns its price. 
        const reducer = (prev, current) => prev + current.price(end_date) - current.price(start_date);
        let profit = this.stocks.reduce(reducer);
        let annualized_profit = 365 / this.days(start_date, end_date) * profit;
        return annualized_profit;
    }

}