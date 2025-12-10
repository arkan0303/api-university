import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: "dzeqt1uj4",
  api_key: "491447296997452",
  api_secret: "qsiwNT6P9QZorSgYBI6GCSY_44A",
});

export const uploadToCloudinary = async (
  fileBuffer: Buffer
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: "auto" },
      (error, result) => {
        if (error) {
          console.error("Error uploading to Cloudinary:", error);
          return reject(new Error("Failed to upload image to Cloudinary"));
        }
        if (!result?.secure_url) {
          return reject(new Error("No URL returned from Cloudinary"));
        }
        resolve(result.secure_url);
      }
    );

    // Create a buffer stream and pipe it to Cloudinary
    const { Readable } = require("stream");
    const stream = Readable.from(fileBuffer);
    stream.pipe(uploadStream);
  });
};

export default cloudinary;
