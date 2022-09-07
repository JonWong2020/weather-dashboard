// global variables
var apiKey = "bc0362baddda25d15a0ff3b3b1af7aa2";
var today = moment().format('L');
var searchHistoryList = [];

// function to get current city weather
function currentCityWeather(city) {
    var queryURL = ''
}

// event listener on search click
$('#searchBtn').on("click", function(event){
    event.preventDefault();

    var city = $('#cityEntry').val().trim();
    currentCityWeather(city);
    if (!searchHistoryList.includes(city)) {
        searchHistoryList.push(city);
        var searchedCity = $('<li class="list-group-item>${city}</li>');
        $('#searchHistory').append(searchedCity);
    };

    localStorage.setItem("city", JSON.stringify(searchHistoryList));
    console.log(searchHistoryList);
});