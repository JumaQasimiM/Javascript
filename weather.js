// read weather from api

const apiKey = '';
// const city = 'heilbronn';

const searchBtn = document.getElementById('btn');

searchBtn.addEventListener('click', () => {
  const city = document.getElementById('city').value.trim();
  if (!city) return alert('Please enter city name');
  const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;



  fetch(api_url)
    .then(
      resp => resp.json())

    .then(data =>
      // console.log(data)
      // document.getElementById('err').innerText = '',

      document.getElementById('weather').innerHTML =
      ` 
     <div id='weather' class='weather-card'>
      <p class='desc'> ${(data.weather[0].description) === "clear sky" ? "🌞" : "🌧️"} </p >
      <p class='temp'> ${data.main.temp} °C <p/>
    <div class="info">
       <div class='weather-info-city'>
       <h3 class='city'> ${data.name} <h3/> 
        <h3 class='country'> ${data.sys.country} <h3/> </div>
        <div class='weather-info-temp'>
        <p class='temp'> ${data.weather[0].main}  <p/>
        <h3 class='time'> ${new Date((data.dt + data.timezone) * 1000).toUTCString().replace('GMT', 'UTC')} <h3/>
        </div>
    </div>
     </div >
    `
    )
    .catch(err =>
      console.log('API key is removed!'));
  document.getElementById('err').innerText ="API key is removed!";
  setTimeout(() => {

    document.getElementById('err').innerText = "";
  }, 2000);
  document.getElementById('weather').innerHTML = '';
})

// for menu bar
const menubar = document.querySelector('.menu-bar');
menubar.addEventListener('click', () => {
  console.info('menu bar clicked');
  const ul = document.querySelector('ul');
  ul.classList.toggle('open');
  if (ul.classList.contains('open')) {
    menubar.innerHTML = '👆🏾';
  } else {
    menubar.innerHTML = '👇🏾';
  }

})


