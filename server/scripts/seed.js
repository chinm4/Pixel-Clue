const mongoose = require('mongoose');
const PixelImage = require('../models/pixelImage.js');


async function addImages() {
  const images = [
    {
      url: 'https://plus.unsplash.com/premium_photo-1677838847763-0810bff8f40e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      topic: 'bicycle'
    },
    {
      url: 'https://images.unsplash.com/photo-1488396325657-dce787099389?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      topic: 'jet'
    },
  ];

  try {
    await PixelImage.insertMany(images);
    console.log('Images added to mongoDB');
  } catch (error) {
    console.error('Error adding images:', error);
  }
}

module.exports = addImages;