document.getElementById('weather-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the location from input
    const location = document.getElementById('location').value;
    
    // Replace with your actual OpenWeatherMap API key
    const apiKey = '10c6d2db36e9a7c15964c8a1c3b3ecda'; 
    // Correctly interpolate the location and API key into the URL
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    // Fetch weather data from API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                // Construct weather information
                const weatherInfo = `
                    Location: ${data.name}, ${data.sys.country}<br>
                    Temperature: ${data.main.temp}°C<br>
                    Weather: ${data.weather[0].description}<br>
                    Humidity: ${data.main.humidity}%<br>
                    Wind Speed: ${data.wind.speed} m/s
                `;
                // Display weather information
                document.getElementById('weather-info').innerHTML = weatherInfo;
            } else {
                // Handle location not found
                document.getElementById('weather-info').innerHTML = 'Location not found. Please try again.';
            }
        })
        .catch(error => {
            // Handle fetch error
            console.error('Error fetching weather data:', error);
            document.getElementById('weather-info').innerHTML = 'An error occurred while fetching the weather data.';
        });
});
