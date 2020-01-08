# To Reproduce

1. Install deps using `yarn`

1. `sh create.sh` to create the lambda function, you might have to create a [lambda role](https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html) and change it in the file.

1. (Optional) If you need to change lambda code or configuration, helpers `update-code.sh` and `update-config.sh` are available.

1. Test the invocations by `yarn ts-node run.ts`

1. Three types of invocations are tested

- async invocation
- async via event invocation
- sync via request response invocation
