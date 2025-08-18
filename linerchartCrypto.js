
const ctx = document.getElementById("criptoChartLiner").getContext("2d");

const coins = ["bitcoin", "ethereum", "binancecoin", "ripple", "cardano"];
const colors = ["red", "blue", "green", "orange", "purple"];
let chart;

async function loadMultiLine() {
  try {
    const datasets = [];
    let labels = [];


    for (let i = 0; i < coins.length; i++) {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coins[i]}/market_chart?vs_currency=usd&days=15`
      );
      const data = await res.json();

      // Datum
      if (i === 0) {
        labels = data.prices.map(p => new Date(p[0]).toLocaleDateString());
      }


      // Kosten
      const prices = data.prices.map(p => p[1]);

      datasets.push({
        label: coins[i].toUpperCase(),
        data: prices,
        borderColor: colors[i],
        borderWidth: 0.5,
        fill: false,
        tension: 0.2
      });


    }

    if (chart) chart.destroy();

    chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top"
          }
        },
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    });

  } catch (error) {
    console.error("Error loading data:", error);
  }
}

// Run
loadMultiLine();

// async function loadCrypto() {
//   try {
//     // const url = "https://api.ciongecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20";
//     const url = "https://api.coinpaprika.com/v1/tickers";
//     const res = await fetch(url);
//     const data = await res.json();
//     const top5Coin = data.slice(0, 5);
//     const labels = Array.from({ length: 10 }, (_, i) => `Day ${i + 1}`); // 10 days data
//     const datasets = top5Coin.map(coin => {
//       const prices = Array.from({ length: 10 }, (_, i) =>
//         (coin.quotes.USD.price *
//           (1 + (Math.random() - 0.5) / 10)).toFixed(2)
//       );

//       // color for evry crypto
//       const color = `hsl(${Math.random() * 360}, 70%, 50%)`;
//       return {
//         label: coin.name,
//         data: prices,
//         fill: false,
//         backgroundColor: color,
//         borderColor: color,
//         tension: 0.3, // for smooth curve
//         segment: {
//           borderColor: ctx => {
//             const { p0, p1 } = ctx.segment;
//             return p1.parsed.y >= p0.parsed.y ? 'rgba(0, 200, 0, 0.6)' : 'rgba(255, 3, 57, 0.6)';
//           }
//         },
//         pointRadius: 3

//       };

//     }); //end dataset

//     console.log(top5Coin);
//     const ctx = document.getElementById('criptoChartLiner').getContext('2d');
//     new Chart(cty, {
//       type: 'line',
//       data: {
//         labels,
//         datasets
//       },
//       options: {
//         responsive: true,
//         Plugins: {
//           legend: {
//             disply: true
//           }
//         },
//         scales: {
//           y: {
//             beginAtZero: false
//           }
//         }
//       }
//     });


//     // liner chart ended
//   } // try ended
//   catch (err) {
//     console.log(err);
//   }




// }
// loadCrypto();
// // setInterval(loadCrypto, 60000);