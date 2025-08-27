import { FastAverageColor } from 'fast-average-color'
import { ref } from 'vue'

const images = [
  new URL('../assets/bg-0.webp', import.meta.url).href,
  new URL('../assets/bg-1.webp', import.meta.url).href,
  new URL('../assets/bg-2.webp', import.meta.url).href,
  new URL('../assets/bg-3.webp', import.meta.url).href,
] as const

const randomImage = ref('')
const fac = new FastAverageColor()
const dominantColor = ref<string | null>(null)

export function useRandomImage() {
  async function init() {
    randomImage.value = getRandomImage()
    // Preload the image
    await preloadImage(randomImage.value)
    // Get dominant color before showing image
    dominantColor.value = await getDominantColor()
    if (dominantColor.value) {
      document.body.style.backgroundColor = dominantColor.value
      document.getElementById('themeMetaTag')?.setAttribute('content', dominantColor.value)
    }
    // Now set the background image
    document.body.style.backgroundImage = `url(${randomImage.value})`
  }

  async function getDominantColor() {
    const color = await fac.getColorAsync(randomImage.value)
    return color.hex
  }

  function getRandomImage(): string {
    const randomIndex = Math.floor(Math.random() * images.length)
    return images[randomIndex] as string
  }

  function preloadImage(src: string): Promise<void> {
    return new Promise((resolve) => {
      const img = new window.Image()
      img.src = src
      img.onload = () => resolve()
      img.onerror = () => resolve()
    })
  }

  return {
    init,
    dominantColor,
  }
}
