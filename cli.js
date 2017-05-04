const rl = require('readline-sync')

const huffman = require('./index')

const INSERT = '1',
    LOAD = '2',
    LIST = '3',
    OLIST = '4', // Ordered list
    EXIT = '0'

class App {
  constructor () {

  }

  menu () {
    let op
    do {
      console.log(`
${INSERT} - Insertar frase
${LOAD} - Cargar e imprimir
${LIST} - Imprimir lista
${OLIST} - Imprimir lista ordenada
${EXIT} - Salir`)
      op = rl.question('Opción: ')
      switch (op) {
        case INSERT:
          this.insert()
          break
        case LOAD:
          this.load()
          break
        case LIST:
          this.list()
          break
        case OLIST:
          this.olist()
          break
        case EXIT:
          break
        default:
          console.log('Adios')
          break
      }
    } while (op !== EXIT)
  }

  insert () {
    this.msg = rl.question('Escribe alguna frase')
    rl.question('Frase guardada.\nPresione "Enter" para continuar... ')
  }

  load () {
    if (!this.msg) return rl.question('No hay ninguna frase guardada.')
    const codes = huffman.toCodes(this.msg)
    console.log(codes)
    rl.question('Presione "Enter" para continuar... ')
  }

  list () {
    if (!this.msg) return rl.question('No hay ninguna frase guardada.')
    const list = huffman.makeList(this.msg)
    console.log(list)
    rl.question('Presione "Enter" para continuar... ')
  }

  olist () {
    if (!this.msg) return rl.question('No hay ninguna frase guardada.')
    const olist = huffman.sortList(huffman.makeList(this.msg))
    console.log(olist)
    rl.question('Presione "Enter" para continuar...   ')
  }
}

const app =  new App()
app.menu()
