/**
  To handle and manipulate streaming data like a video, a large file, etc., we need streams in Node. The streams module in Node.js manages all streams.

  Types of Streams :-
    In Node, there are four different types of streams:
    1. Readable streams → To create a stream of data for reading (say, reading a large file in chunks).

    2. Writable streams → To create a stream of data for writing (say, writing a large amount of data to a file).

    3. Duplex streams → To create a stream that is both readable and writable at the same time. We can read and write to a duplex stream (say, a socket connection between a client and a server).

    4. Transform streams → To create a stream that is readable and writable, but the data can be modified while reading and writing to the stream (say, compressing data by the client and server before while requesting).


Each type of Stream is an EventEmitter instance and throws several events at a different instance of times. For example, some of the commonly used events are −
    1. data − This event is fired when there is data is available to read.

    2. end − This event is fired when there is no more data to read.

    3. error − This event is fired when there is an error receiving or writing data.

    4. finish − This event is fired when all the data has been flushed to the underlying system

Streaming means listening to music or watching a video in ‘real-time’, instead of downloading a file to your computer and watching it later.

 */

const fs = require('fs');
const http = require('http');

server = http.createServer();

server.on('request', (req, res) => {
  /**
    1st Way - File Module

    fs.readFile('input.txt', (err, data) => {
      if (err) console.log(err);
      res.end(data.toString());
    });
  */

  /**
   * 2nd way
   * Reading from a Stream
   * Create a Readable Stream
   * Handle Stream Events --> data, end, and error

  const rstream = fs.createReadStream('input.txt');
  rstream.on('data', (chunkdata) => {
    res.write(chunkdata);
  });
  rstream.on('end', () => {
    res.end();
  });
  rstream.on('error', (err) => {
    console.log(err);
    res.end('File not Found');
  });
*/

  /**
   * 3rd Way -> Stream.pipe()
                        The readable.pipe() method in a Readable Stream is used to attach a Writable stream to the readable stream so that it consequently switches into flowing mode and then pushes all the data that it has to the attached Writable.

                        Parameters: This method accept two parameters as mentioned above and described below:

                        1. destination: This parameter holds the destination of writing data.
                        2. options: This parameter holds the pipe options.

                        Return Value: It returns the stream.Writable destination, allowing for a chain of pipes if it is a Duplex or a Transform stream.
   */

  const rstream = fs.createReadStream('input.txt');
  rstream.pipe(res);
});

server.listen(5000, '127.0.0.1', () => {
  console.log('Listening the port in 5000');
});
