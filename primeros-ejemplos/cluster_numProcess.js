import cluster from 'cluster'
import { cpus } from 'os'

const numProcess = cpus().length

if (cluster.isPrimary) {
    console.log(`${cluster.isPrimary}: ${process.pid}`)
    for (let index = 0; index < numProcess; index++) {
        cluster.fork()
    }
} else {
    console.log(`${cluster.isPrimary}: ${process.pid}`)
}