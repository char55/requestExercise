var img = 'https://sytantris.github.io/http-examples/future.jpg';

var request = require('request');
var fs = require('fs');
var k = fs.createWriteStream('./future.jpg')

request.get(img)
       .on('error', function(err) {
          throw err
       })
       .on('response', function(response) {
          console.log('Response code: ', response.statusCode)
          console.log('Response message: ', response.statusMessage)
          console.log('Content-type: ', response.headers['content-type'])
       })
       // .pipe(k)
       .pipe(fs.createWriteStream('./test.jpg'))
       console.log('Downloading image...')
       console.log('Download complete.')