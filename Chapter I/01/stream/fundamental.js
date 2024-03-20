import { Readable } from 'node:stream'

class oneToHundred extends Readable {
index = 1
  //todo stream readable tem um metodo read
  _read() {
    const i = this.index++

    setTimeout(() => {
      if (i > 100) {
        this.push(null)
      } else {
        const buf = Buffer.from(String(i))
  
        this.push(buf)
      }
    }, 1000)
  }
}

new oneToHundred().pipe(process.stdout)