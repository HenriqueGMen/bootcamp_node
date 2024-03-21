import { Transform } from 'node:stream'
import http from 'node:http'

class InvertNumbers extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1

    console.log(transformed)

    callback(null, Buffer.from(String(transformed)))
  }
}

const server = http.createServer((req, res) => {
  return req.pipe(new InvertNumbers).pipe(res)
});

server.listen(3334)