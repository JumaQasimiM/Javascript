
async function loadData() {
  try {
    const url = "https://api.ciongecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20";
    // const url = "https://cors-anywhere.herokuapp.com/https://api.coinpaprika.com/v1/tickers";
    const res = await fetch(url);
    const data = await res.json();
    const top20Coin = data.slice(0, 15);

    // console.log(top20Coin);
    const tableBody = document.querySelector('#CryptoTable tbody');
    // for chart
    const labels = [];
    const prices = [];
    const colors = [];
    // date
    const updateDate = new Date().toLocaleDateString();
    top20Coin.forEach(coin => {
      const row = document.createElement('tr');
      row.innerHTML = `
      <td class="rank">${coin.rank}</td>
      <td class="name">${coin.name}</td>
      <td>${coin.quotes.USD.price.toFixed(2)}</td>
      <td class="${coin.quotes.USD.percent_change_24h > 0 ? 'positive' : 'negative'}">${coin.quotes.USD.percent_change_24h.toFixed(2)}</td>
      
      <td>${updateDate}</td>
      `;
      tableBody.appendChild(row);
      // for chart
      labels.push(coin.name);
      prices.push(coin.quotes.USD.price.toFixed(2));
      colors.push(coin.quotes.USD.percent_change_24h >= 0 ? 'rgba(0, 200, 0, 0.6)' : 'rgba(255, 3, 57, 0.6)');
      // console.log(labels, prices);
    });
    // draw chart
    const ctx = document.getElementById('criptoChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Price in USD',
          data: prices,
          backgroundColor: colors,
          borderColor: colors.map(color => color.replace('0.6', '1')),
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        Plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: value => {
                return value + "$";
              }
            }
          }
        }
      }
    });
    // liner chart
    const ctxLine = document.getElementById('criptoChartLiner').getContext('2d');
    const dataPoint = prices.map(p => Number(p));
    const colorPoint = dataPoint.map((price, index, arr) => {
      if (index === 0) return 'grey'; // first point
      return price >= arr[index - 1] ? 'green' : 'red';
    });

    new Chart(ctxLine, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Price in USD',
          data: dataPoint,
          backgroundColor: colorPoint,
          borderColor: colorPoint.map(color => color.replace('0.6', '1')),
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        Plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {

          }
        }
      }
    })
    // bar chart ended
    // liner chart started

    // liner chart ended
  } // try ended
  catch (err) {
    console.log(err);
  }




}
loadData();
// setInterval(loadData, 6000);