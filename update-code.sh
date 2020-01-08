rm -rf node_modules
yarn install --production
sh zip.sh
du -h ./hello.zip
aws lambda update-function-code --function-name p2-lambda --zip-file "fileb://hello.zip"
yarn install --offline