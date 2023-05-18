import cluster from 'cluster'

const createClone = () => {
    if (cluster.isPrimary) {
        console.log(`PID: ${process.pid}`)
        console.log(`This is Primary Process?: ${cluster.isPrimary}`)
        cluster.fork()
    } else {
        let result = 0
        console.log(`PID: ${process.pid}`)
        console.log(`This is Primary Process?: ${cluster.isPrimary}`)
        for (let index = 0; index < (5e9 * 3); index++) {
            result += index
        }
        console.log(`El resutlado es ${result}`)
    }
}

createClone()
console.log('Hola Mundo!')