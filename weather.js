// Append Api Key
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "75fc3e67a6msh5dea1ca77d28b66p15168ejsn06fb975a2b4d",

    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

// Get Weather with 3 day forecast
const getWeather = (city) => {
  fetch(
    "https://weatherapi-com.p.rapidapi.com/forecast.json?q=" + city + "&days=3",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cityName.innerHTML = city;
      cityName_1.innerHTML = city;
      cityName_2.innerHTML = city;

      // Temperature
      date_0.innerHTML = "Real Time";
      temp.innerHTML = response.current.temp_c;
      min_temp.innerHTML = response.forecast.forecastday[0].day.mintemp_c;
      max_temp.innerHTML = response.forecast.forecastday[0].day.maxtemp_c;
      feels_like.innerHTML = response.current.feelslike_c;

      // Cloud
      cloud_icon.src = response.current.condition.icon;
      cloud_text.innerHTML = response.current.condition.text;

      // Air Quality
      humidity.innerHTML = response.current.humidity;
      wind_vis.innerHTML = response.current.vis_km;
      uv_index.innerHTML = response.current.uv;

      // Rain Chance
      let rain = response.forecast.forecastday[0].day.daily_chance_of_rain;
      rain_chance.innerHTML = rain;

      function rainPossibility(rains) {
        if (rains <= 10) {
          return "No Rain";
        } else if (rains <= 25) {
          return "Light Rain";
        } else if (rains <= 50) {
          return "Moderate Rain";
        } else if (rains <= 75) {
          return "High Rain";
        } else if (rains <= 100) {
          return "Heavy Rain";
        }
      }

      rain_today.innerHTML = rainPossibility(rain);
      cloud_pct.innerHTML = response.current.cloud;

      // Sun Timing
      sun_arise.innerHTML = response.forecast.forecastday[0].astro.sunrise;
      sun_set.innerHTML = response.forecast.forecastday[0].astro.sunset;

      // Pressure & Wind
      pressure.innerHTML = response.current.pressure_mb;
      wind_dir.innerHTML = response.current.wind_dir;
      wind_speed.innerHTML = response.current.wind_kph;

      // Tommorow Day - 1
      // Temperature
      let dateString = response.forecast.forecastday[1].date;
      let parts = dateString.split("-");

      date_1.innerHTML = parts[2] + "-" + parts[1];
      temp_1.innerHTML = response.current.temp_c;
      min_temp_1.innerHTML = response.forecast.forecastday[1].day.mintemp_c;
      max_temp_1.innerHTML = response.forecast.forecastday[1].day.maxtemp_c;
      feels_like_1.innerHTML = response.current.feelslike_c;

      // Cloud_1
      cloud_icon_1.src = response.forecast.forecastday[1].day.condition.icon;
      cloud_text_1.innerHTML =
        response.forecast.forecastday[1].day.condition.text;

      // Air Quality
      humidity_1.innerHTML = response.forecast.forecastday[1].day.avghumidity;
      wind_vis_1.innerHTML = response.forecast.forecastday[1].day.avgvis_km;
      uv_index_1.innerHTML = response.forecast.forecastday[1].day.uv;

      // Rain Chance
      rain = response.forecast.forecastday[1].day.daily_chance_of_rain;
      rain_chance_1.innerHTML = rain;

      rain_today_1.innerHTML = rainPossibility(rain);
      cloud_pct_1.innerHTML = response.current.cloud;

      // Sun Timing
      sun_arise_1.innerHTML = response.forecast.forecastday[1].astro.sunrise;
      sun_set_1.innerHTML = response.forecast.forecastday[1].astro.sunset;

      // Tommorow Day - 2
      // Temperature
      dateString = response.forecast.forecastday[2].date;
      parts = dateString.split("-");
      date_2.innerHTML = parts[2] + " - " + parts[1];

      temp_2.innerHTML = response.current.temp_c;
      min_temp_2.innerHTML = response.forecast.forecastday[2].day.mintemp_c;
      max_temp_2.innerHTML = response.forecast.forecastday[2].day.maxtemp_c;
      feels_like_2.innerHTML = response.current.feelslike_c;

      // Cloud
      cloud_icon_2.src = response.forecast.forecastday[2].day.condition.icon;
      cloud_text_2.innerHTML =
        response.forecast.forecastday[2].day.condition.text;

      // Air Quality
      humidity_2.innerHTML = response.forecast.forecastday[2].day.avghumidity;
      wind_vis_2.innerHTML = response.forecast.forecastday[2].day.avgvis_km;
      uv_index_2.innerHTML = response.forecast.forecastday[2].day.uv;

      // Rain Chance
      rain = response.forecast.forecastday[2].day.daily_chance_of_rain;
      rain_chance_2.innerHTML = rain;
      rain_today_2.innerHTML = rainPossibility(rain);
      cloud_pct_2.innerHTML = response.current.cloud;

      // Sun Timing
      sun_arise_2.innerHTML = response.forecast.forecastday[2].astro.sunrise;
      sun_set_2.innerHTML = response.forecast.forecastday[2].astro.sunset;
    })
    .catch((err) => console.error(err));
};

// Add with Search Button
submit.addEventListener("click", function (e) {
  e.preventDefault();
  getWeather(city.value);
})

// Default Weather is "New Delhi"
getWeather("New Delhi");


// Toggle Weather
function toggleWeather(section) {
  const todayLink = document.getElementById('todayLink');
  const nextDayLink = document.getElementById('nextDayLink');
  const todaySection = document.getElementById('day_0');
  const nextDaySection = document.getElementById('day_1');

  if (section === "today") {
    todaySection.style.display = "block";
    nextDaySection.style.display = "none";
    todayLink.classList.add("active");
    nextDayLink.classList.remove("active");
  } else if (section === "nextDay") {
    todaySection.style.display = "none";
    nextDaySection.style.display = "block";
    todayLink.classList.remove("active");
    nextDayLink.classList.add("active");
  }
}


// Smooth Faqs
let currentAnswerId = null;

function toggleAnswer(id) {
  const answerElement = document.getElementById(`faq-answer-${id}`);
  if (currentAnswerId !== id) {
    hideCurrentAnswer();
    // Get the scroll height of the answer content and set it as the max-height
    answerElement.style.maxHeight = answerElement.scrollHeight + "px";
    currentAnswerId = id;
  } else {
    hideCurrentAnswer();
  }
}

function hideCurrentAnswer() {
  if (currentAnswerId !== null) {
    const currentAnswerElement = document.getElementById(
      `faq-answer-${currentAnswerId}`
    );
    currentAnswerElement.style.maxHeight = null;
    currentAnswerId = null;
  }
}
