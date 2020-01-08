import {
  invokeLambdaAsync,
  invokeLambdaAsyncViaEvent,
  invokeLambdaSync,
} from './utils'

function main() {
  invokeLambdaAsync('p2-lambda', '')
    .then(data => {
      console.log({ data1: data.$response.data })
    })
    .catch(e => {
      console.log({ e1: e })
    })

  invokeLambdaAsyncViaEvent('p2-lambda', '')
    .then(data => {
      console.log({ data1: data.$response.data })
    })
    .catch(e => {
      console.log({ e1: e })
    })

  invokeLambdaSync('p2-lambda', '')
    .then(data => {
      console.log({ data2: data.$response.data })
    })
    .catch(e => {
      console.log({ e2: e })
    })
}

main()
