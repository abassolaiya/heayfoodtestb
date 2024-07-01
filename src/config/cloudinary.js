const { v2: cloudinary } = require("cloudinary");

cloudinary.config({
  cloud_name: 'djtt4ctkd',
  api_key: '887374331889292',
  api_secret: '1iTllizYzFPHh5wSU2G1uezKejM', // Replace with your actual API secret
});

module.exports = cloudinary;
