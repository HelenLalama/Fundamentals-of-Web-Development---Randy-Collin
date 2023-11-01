/* add code below this */
var company = JSON.parse(content);

function CompanyCard(companyName, day50MovingAvg, day200MovingAvg, revenue, marketCap50, marketCap200, equity, tags) {
    this.symbol = symbol;
    this.companyName = companyName;
    this.day50MovingAvg = day50MovingAvg;
    this.day200MovingAvg = day200MovingAvg;
    this.revenue = revenue;
    this.marketCap50 = marketCap50;
    this.marketCap200 = marketCap200;
    this.equity = equity;
    this.tags = tags;
}

currency = (num) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return formatter.format(num);
}

billions = (num) => {
    return new Intl.NumberFormat('en-US',
        {
            notation: 'compact',
            compactDisplay: 'short',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            style: 'currency',
            currency: 'USD'
        }).format(num);
}

function CardOutput(company) {
    document.write('<article>')
    document.write('<div class="card">');
    document.write('<h2>' + company.symbol + ' - ' + company.companyName + '</h2>');
    document.write('<div class="card-text">');
    document.write('<p>' + 'Share Price (50day avg): ' + '<span>' + currency(company.stats.day50MovingAvg) + '</span>' + '</p>');
    document.write('<p>' + 'Share Price (200day avg): ' + '<span>' + currency(company.stats.day200MovingAvg) + '</span>' + '</p>');
    document.write('<p>' + 'Market Cap (50day avg): ' + '<span>' + billions(company.stats.sharesOutstanding * company.stats.day50MovingAvg) + '</span>' + '</p>');
    document.write('<p>' + 'Market Cap (200day avg): ' + '<span>' + billions(company.stats.sharesOutstanding * company.stats.day200MovingAvg) + '</span>' + '</p>');
    document.write('<p>' + 'Net Revenue: ' + '<span>' + billions(company.stats.operatingRevenue - company.stats.costOfRevenue) + '</span>' + '</p>');
    document.write('<p>' + 'Shareholder Equity: ' + '<span>' + billions(company.stats.totalAssets - company.stats.totalLiabilities) + '</span>' + '</p>');
    document.write('<footer>' + '<small>' + company.tags[0] + '</small>' + '<small>' + company.tags[1] + '</small>' + (company.tags[2] ? '<small>' + company.tags[2] + '</small>' : '') + '</footer>');
    document.write('</div>');
    document.write('</div>');
    document.write(`</article>`)
}

for (var i = 0; i < company.length; i++) {
    CardOutput(company[i]);
}

