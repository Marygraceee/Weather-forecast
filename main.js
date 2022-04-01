// https://api.openweathermap.org/geo/1.0/direct?q=London&appid=6a67fe856801ab28a86089a438ee7191
// https://api.openweathermap.org/data/2.5/weather?q=London&appid=6a67fe856801ab28a86089a438ee7191

const city = document.getElementById('city');
const searchBtn = document.getElementById('searchBtn');
const temperatureDisplayer = document.querySelector('.temperatureDisplayer');

searchBtn.addEventListener('click', getTemp);

function getTemp() {
  if (city.value !== '' && typeof city.value === 'string') {
    const cityToSearch = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=6a67fe856801ab28a86089a438ee7191`;
    fetch(cityToSearch)
      .then((response) => response.json())
      .then((data) => {
        const temperature = (data.main.temp - (273.15)).toFixed(1);

        if (temperature <= 10 && temperature >= 0) {
          temperatureDisplayer.style.cssText = 'color: lightblue';
          temperatureDisplayer.textContent = `The temperature in ${city.value} is ${temperature} Celsius or ${temperature + 32} Fahrenheit, it's cold.`;
        }
        if (temperature < 0) {
          temperatureDisplayer.style.cssText = 'color: blue';
          temperatureDisplayer.textContent = `The temperature in ${city.value} is ${temperature} Celsius or ${temperature + 32} Fahrenheit, IT'S FREEZING HERE!`;
        }
        if (temperature > 10 && temperature < 25) {
          temperatureDisplayer.style.cssText = 'color: green';
          temperatureDisplayer.textContent = `The temperature in ${city.value} is ${temperature} Celsius or ${temperature + 32} Fahrenheit, the temperature is very comfortable`;
        }
        if (temperature >= 25) {
          temperatureDisplayer.style.cssText = 'color: red';
          temperatureDisplayer.textContent = `The temperature in ${city.value} is ${temperature} Celsius or ${temperature + 32} Fahrenheit, IT'S SO HOT HERE!`;
        }
      });
  }

  if (city.value === '' || typeof city.value !== 'string') {
    alert('You must insert a valid city name');
  }
}
