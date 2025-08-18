
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
        `https://api.coingecko.com/api/v3/coins/${coins[i]}/market_chart?vs_currency=usd&days=7`
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
        borderWidth: 0.2,
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


// // setInterval(loadCrypto, 60000);

