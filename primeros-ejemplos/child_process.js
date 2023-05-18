import cluster from 'cluster'

let result = 0
console.log(`PID: ${process.pid}`)
console.log(`This is Primary Process?: ${cluster.isPrimary}`)
for (let index = 0; index < (5e9 * 3); index++) {
    result += index
}

process.send(result)