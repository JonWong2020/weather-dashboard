// global variables
var apiKey = "bc0362baddda25d15a0ff3b3b1af7aa2";
var today = moment().format('L');
var searchHistoryList = [];

// function to get current city weather
function currentCityWeather(city) {
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    $.ajax({
        url: queryURL,
        method: 'GET',
      }).then(function (cityWeatherResponse) {
        console.log(cityWeatherResponse);
        
        $("#weatherContent").css("display", "block");
        $("#cityDetail").empty();

        var iconCode = cityWeatherResponse.weather[0].icon;
        var iconURL = `https://openweathermap.org/img/wn/${iconCode}.png`;

        var currentCity = $(`
            <h2 id="currentCity">
                ${cityWeatherResponse.name} ${today} <img src="${iconURL}" alt="${cityWeatherResponse.weather[0].description}" />
            </h2>
            <p>Temperature: ${cityWeatherResponse.main.temp} °F</p>
            <p>Humidity: ${cityWeatherResponse.main.humidity}\%</p>
            <p>Wind Speed: ${cityWeatherResponse.wind.speed} MPH</p>
        `);
        $("#cityDetail").append(currentCity);
    });
}

// event listener on search click
$('#searchBtn').on("click", function(event){
    event.preventDefault();

    var city = $('#cityEntry').val().trim();
    currentCityWeather(city);
    if (!searchHistoryList.includes(city)) {
        searchHistoryList.push(city);
        var searchedCity = $(`<li class="list-group-item">${city}</li>`);
        $('#searchHistory').append(searchedCity);
    };

    localStorage.setItem("city", JSON.stringify(searchHistoryList));
    console.log(searchHistoryList);
});
