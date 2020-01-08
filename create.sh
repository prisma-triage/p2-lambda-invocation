rm -rf node_modules
yarn install --production
sh zip.sh
aws lambda create-function --function-name p2-lambda --runtime nodejs12.x --role arn:aws:iam::243760423205:role/lambda-role-divy --handler index.handler --zip-file "fileb://hello.zip"
yarn install --offline