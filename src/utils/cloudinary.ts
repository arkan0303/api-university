import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'djbmw2h3h',
  api_key: '211287959868716',
  api_secret: '9CvrQ2ene_9BkMM2uF-eX0DcSmI'
});

export const uploadToCloudinary = async (fileBuffer: Buffer): Promise<string> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: 'auto' },
      (error, result) => {
        if (error) {
          console.error('Error uploading to Cloudinary:', error);
          return reject(new Error('Failed to upload image to Cloudinary'));
        }
        if (!result?.secure_url) {
          return reject(new Error('No URL returned from Cloudinary'));
        }
        resolve(result.secure_url);
      }
    );

    // Create a buffer stream and pipe it to Cloudinary
    const { Readable } = require('stream');
    const stream = Readable.from(fileBuffer);
    stream.pipe(uploadStream);
  });
};

export default cloudinary;
