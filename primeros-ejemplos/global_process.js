import cluster from 'cluster'
import {fork} from 'child_process'

console.log(`PID: ${process.pid}`)
console.log(`This is Primary Process?: ${cluster.isPrimary}`)

const createChild = () => {
    const child = fork('./child_process.js')
    child.on('message', result => console.log(`El resultado es ${result}`))
}

createChild()