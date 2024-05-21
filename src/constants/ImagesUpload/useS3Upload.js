import { useState } from 'react';
import AWS from 'aws-sdk';
import S3 from 'aws-sdk/clients/s3';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

const useS3Upload = () => {
  const [uploading, setUploading] = useState(false);

  const accessId = process.env.REACT_APP_AWS_ACCESS_KEY_ID;
  const secretId = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;
  const bucketName = process.env.REACT_APP_AWS_BUCKET_NAME;
  const region = process.env.REACT_APP_AWS_REGION;

  if (!accessId || !secretId || !bucketName || !region) {
    console.error('Missing AWS configuration values.');
    throw new Error('Missing AWS configuration values.');
  }

  AWS.config.update({
    accessKeyId: accessId,
    secretAccessKey: secretId,
  });

  const s3 = new S3({
    params: { Bucket: bucketName },
    region,
  });

  const uploadFile = async (file) => {
    setUploading(true);

    const params = {
      Bucket: bucketName,
      Key: `${Date.now()}-${file.name}`,
      Body: file,
      ACL: 'public-read',
    };

    try {
      const data = await s3.upload(params).promise();
      setUploading(false);
      return data.Location;
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploading(false);
      throw error;
    }
  };

  return { uploadFile, uploading };
};

export default useS3Upload;
