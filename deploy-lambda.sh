# Usage: zip the zip files and upload to s3
# How to use:
#     1. ./zip.sh app1
#     2. yarn zip app1

cd "$1/dist"
zip -r -x node_modules/\* -X "../../$1.zip" *
cd ..
cd ..
aws s3 --region ap-southeast-1 cp $1.zip s3://{you_bucket_name}
aws lambda update-function-code --function-name $1 --s3-bucket {you_bucket_name} --s3-key $1.zip

