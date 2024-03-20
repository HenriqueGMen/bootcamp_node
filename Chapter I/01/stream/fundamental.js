import { Readable, Transform, Writable } from 'node:stream'

class OneToHundred extends Readable {
index = 1
  //todo stream readable tem um metodo read
  _read() {
    const i = this.index++

    setTimeout(() => {
      if (i > 1000) {
        this.push(null)
      } else {
        const buf = Buffer.from(String(i))
  
        this.push(buf)
      }
    }, 1000)
  }
}

class InvertNumbers extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1

    callback(null, Buffer.from(String(transformed)))
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10)
    callback()
  }
}

new OneToHundred()
  .pipe(new InvertNumbers())
  .pipe(new MultiplyByTenStream())