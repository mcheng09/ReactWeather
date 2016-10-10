var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=723fd48312ec643ba2f67734b898e66c&units=imperial';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestURL).then(function(res){
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message)
      }
      else {
        return res.data.main.temp;
      }
    }, function(err) {
      throw new Error(err.response.data.message);
    });
  }
}
