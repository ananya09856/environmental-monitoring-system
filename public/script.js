const temp = document.getElementById("temp");

const humidity = document.getElementById("humidity");

const air = document.getElementById("air");

const battery = document.getElementById("battery");

const solar = document.getElementById("solar");

const tempChartCanvas = document.getElementById("tempChart");

const humidityChartCanvas = document.getElementById("humidityChart");

const tempChart = new Chart(tempChartCanvas, {

    type: "line",

    data: {

        labels: [],

        datasets: [{

            label: "Temperature",

            data: [],

            borderWidth: 2

        }]

    }

});

const humidityChart = new Chart(humidityChartCanvas, {

    type: "line",

    data: {

        labels: [],

        datasets: [{

            label: "Humidity",

            data: [],

            borderWidth: 2

        }]

    }

});

async function fetchData() {

    try {

        const response = await fetch("/data");

        const data = await response.json();

        temp.innerHTML = data.temperature + " °C";

        humidity.innerHTML = data.humidity + " %";

        air.innerHTML = data.air + " AQI";

        battery.innerHTML = data.battery + " %";

        solar.innerHTML = data.solar + " W";

        const time = new Date().toLocaleTimeString();

        tempChart.data.labels.push(time);

        tempChart.data.datasets[0].data.push(data.temperature);

        humidityChart.data.labels.push(time);

        humidityChart.data.datasets[0].data.push(data.humidity);

        if (tempChart.data.labels.length > 10) {

            tempChart.data.labels.shift();

            tempChart.data.datasets[0].data.shift();

            humidityChart.data.labels.shift();

            humidityChart.data.datasets[0].data.shift();

        }

        tempChart.update();

        humidityChart.update();

    }

    catch (error) {

        console.log(error);

    }

}

fetchData();

setInterval(fetchData, 2000);