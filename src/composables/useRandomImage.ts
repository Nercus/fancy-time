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
    document.body.style.backgroundImage = `url(${randomImage.value})`
    dominantColor.value = await getDominantColor()
  }

  async function getDominantColor() {
    const color = await fac.getColorAsync(randomImage.value)
    return color.hex
  }

  function getRandomImage(): string {
    const randomIndex = Math.floor(Math.random() * images.length)
    return images[randomIndex] as string
  }

  return {
    init,
    dominantColor,
  }
}
