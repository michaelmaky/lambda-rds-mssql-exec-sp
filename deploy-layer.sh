# Usage: zip the zip files and upload to s3
# How to use:
#     1. ./zip.sh app1
#     2. yarn zip app1

cd "$1"
zip -r -X "../$1.zip" *
cd ..
aws s3 --region ap-southeast-1 cp $1.zip s3://{you_bucket_name}
