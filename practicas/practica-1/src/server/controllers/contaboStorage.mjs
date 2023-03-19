import AWS from 'aws-sdk';

import dotenv from 'dotenv';

dotenv.config();

const connection = new AWS.S3({
  accessKeyId: process.env.CONTABO_ACCESS_KEY,
  secretAccessKey: process.env.CONTABO_SECRET_ACCESS_KEY,
  endpoint: process.env.CONTABO_ENDPOINT,
  s3ForcePathStyle: true,
  signatureVersion: 'v4',
});

export async function uploadToContabo(file, fileName) {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: fileName,
    Body: file,
    ContentType: file.mimetype,
    ACL: 'public-read',
  };

  return new Promise((resolve, reject) => {
    connection.upload(params, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data.Location); // Devuelve la URL de la imagen en S3
      }
    });
  });
}

export const getSignedUrl = (fileName, expires) => {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: fileName,
    Expires: expires || 60,
  };

  const signedUrl = connection.getSignedUrl('getObject', params);
  console.log('Signed URL:', signedUrl);
  return signedUrl;
};





