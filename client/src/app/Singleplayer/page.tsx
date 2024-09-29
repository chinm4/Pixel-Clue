"use client";

import React, { useEffect } from 'react'

/*const filterImage = (imageContainer, topic: string, images) => {
  images.forEach((img) => {
    if (img.topic === topic) {
      const imgElement = document.createElement('img');
      imgElement.src = img.url;
      imgElement.alt = img.topic || 'image';
      imageContainer?.appendChild(imgElement);
    }
  });
}*/

async function fetchImages() {
  console.log('Fetching Images');
  try {
    const response = await fetch('http://localhost:8000/api/images');
    const images = await response.json();
    console.log(images);

    const imageContainer = document.getElementById('imageContainer');
    //NEED A FIX FOR THIS
    if (imageContainer && imageContainer.children.length > 0) {
      console.log('Images already loaded');
      return;
    }
    images.forEach((img) => {
      if (img.topic === "jet") {
        const imgElement = document.createElement('img');
        imgElement.src = img.url;
        imgElement.alt = img.topic || 'image';
        imageContainer?.appendChild(imgElement);
      }
    });

    
  } catch (error) {
    console.error('Error fetching iamges:', error);
  }
}

const SinglePlayer = () => {

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <div className="flex align-center justify-center h-80 w-auto mt-20" id="imageContainer"></div>
    </div>
  )
}

export default SinglePlayer;