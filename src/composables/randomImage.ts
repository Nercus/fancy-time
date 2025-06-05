

const images = [
  new URL('../assets/bg-0.webp', import.meta.url).href,
  new URL('../assets/bg-1.webp', import.meta.url).href,
  new URL('../assets/bg-2.webp', import.meta.url).href,
  new URL('../assets/bg-3.webp', import.meta.url).href,
]

export function useRandomImage() {
  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }


  function setRandomImage() {
    const randomImage = getRandomImage();
    // set random image to the body background
    document.body.style.backgroundImage = `url(${randomImage})`;
    document.body.style.backgroundSize = 'cover';
  }

  return {
    getRandomImage,
    setRandomImage
  }
}
