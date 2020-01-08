import * as AWS from 'aws-sdk'
const Lambda = new AWS.Lambda({
  region: 'us-east-1',
})

export async function invokeLambdaAsync(functionName: string, payload: any) {
  const req: AWS.Lambda.InvokeAsyncRequest = {
    FunctionName: functionName,
    InvokeArgs: '{}',
  }
  return await Lambda.invokeAsync(req).promise()
}

export async function invokeLambdaAsyncViaEvent(
  functionName: string,
  payload: any,
) {
  const req: AWS.Lambda.InvocationRequest = {
    FunctionName: functionName,
    Payload: JSON.stringify(payload),
    InvocationType: 'Event',
    LogType: 'Tail',
  }
  return Lambda.invoke(req).promise()
}

export async function invokeLambdaSync(functionName: string, payload: any) {
  const req: AWS.Lambda.InvocationRequest = {
    FunctionName: functionName,
    Payload: JSON.stringify(payload),
    InvocationType: 'RequestResponse',
    LogType: 'Tail',
  }
  return Lambda.invoke(req).promise()
}
