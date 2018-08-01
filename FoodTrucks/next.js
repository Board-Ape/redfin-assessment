function next(filteredTrucksArray) {
  const http = require('http');
  const request = require('request');
  const filter = require('./filterParameters');
  const displaySorted = require('./displaySorted');
  const next = require('./next');
  let str = '';

  callback = (res) => {

    res.on('data', (chunk) => {
      str += chunk;
    });

    res.on('end', () => {
      const filteredTrucks = filter(JSON.parse(str));
      const nextTen = displaySorted(filteredTrucks, 10, 20);

      console.log(nextTen);
    });

  };

  const req = http.request('http://data.sfgov.org/resource/bbb8-hzi6.json', callback).end();
};

next()
