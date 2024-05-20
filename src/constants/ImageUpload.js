import AWS from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const s3 = new AWS.S3();

export const uploadImageToS3 = async (file) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${Date.now()}-${file.name}`,
    Body: file,
    ACL: 'public-read',
  };

  try {
    const data = await s3.upload(params).promise();
    return data.Location;
  } catch (err) {
    console.error('Error uploading file:', err);
    throw err;
  }
};
