/** 7f89095eea4813d3a090d641dc3278c7

  api.openweathermap.org/data/2.5/weather?q=Kathmandu&appid=7f89095eea4813d3a090d641dc3278c7
*/

const http = require('http');
const fs = require('fs');
var requests = require('requests');

const homeFile = fs.readFileSync('home.html', 'utf-8');
const requestVal = (tempVal, orgVal) => {
  let temperature = tempVal.replace('{%tempval%}', orgVal.main.temp);
  temperature = temperature.replace('{%tempmin%}', orgVal.main.temp_min);
  temperature = temperature.replace('{%tempmax%}', orgVal.main.temp_max);
  temperature = temperature.replace('{%location%}', orgVal.name);
  temperature = temperature.replace('{%country%}', orgVal.sys.country);
  temperature = temperature.replace('{%tempStatus%}', orgVal.weather[0].main);

  //   console.log(temperature);
  return temperature;
};

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    requests(
      'http://api.openweathermap.org/data/2.5/weather?q=Kathmandu&appid=7f89095eea4813d3a090d641dc3278c7'
    )
      .on('data', (chunk) => {
        const objData = JSON.parse(chunk);
        const arrData = [objData];
        // console.log(arrData);

        const realTimeData = arrData
          .map((val) => requestVal(homeFile, val))
          .join('');
        res.write(realTimeData);
        // console.log(realTimeData);
      })
      .on('end', (err) => {
        if (err)
          return console.log('Connection closed due to some errors', err);
        res.end();
      });
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Connection establishing on port 8000');
});
