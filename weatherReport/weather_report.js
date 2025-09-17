function showweatherDetails(event) {
      event.preventDefault();
      const city = document.getElementById('city').value;
      const lat=document.getElementById('latitude').value;
      const lon=document.getElementById('longitude').value;

      const apiKey = 'API_KEY'; // Replace 'YOUR_API_KEY' with your actual API key
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

      fetch(apiUrl)
        .then(response => response.json())
        /*.then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        })*/
        .then(data => {
            console.log("API Data:", data);
            const latlonelem=document.getElementById('latloninfo');
            latlonelem.innerHTML=`<h2>Geo co-ordinates are</h2>
                                  <p>Latitude is: ${data.coord.lat}</p>
                                  <p>Longitude is: ${data.coord.lon}</p>
                                  <p>The place is: ${data.name}</p>`;
        })
        .catch(error => {console.error("Error:", error);});
        /*
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
          });
          */
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );


