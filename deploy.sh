yarn install
yarn build

BUILD_ID=`cat .next/BUILD_ID`
INDEX_FILE=".next/server/static/$BUILD_ID/pages/index.html"

echo "Deploying $BUILD_ID"
aws s3 sync .next s3://nasrmaswood.com/next_ --cache-control public --acl public-read 
aws s3 cp $INDEX_FILE s3://nasrmaswood.com/index.html --cache-control public --acl public-read
