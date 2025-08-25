// Centralized image resolver for local assets
import s1 from '../assets/imgs/s1.jpg'
import s2 from '../assets/imgs/s2.jpg'
import s3 from '../assets/imgs/s3.jpg'
import s4 from '../assets/imgs/s4.jpg'
import s5 from '../assets/imgs/s5.jpg'
import s6 from '../assets/imgs/s6.jpg'
import s7 from '../assets/imgs/s7.jpg'
import s8 from '../assets/imgs/s8.jpg'
import s9 from '../assets/imgs/s9.jpg'
import s10 from '../assets/imgs/s10.jpg'

import m1 from '../assets/imgs/m1.jpg'
import m2 from '../assets/imgs/m2.jpg'
import m3 from '../assets/imgs/m3.jpg'
import m4 from '../assets/imgs/m4.jpg'
import m5 from '../assets/imgs/m5.jpg'
import m6 from '../assets/imgs/m6.jpg'
import m7 from '../assets/imgs/m7.jpg'

export const sareeImages = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
export const menImages = [m1, m2, m3, m4, m5, m6, m7]
export const allImages = [...sareeImages, ...menImages]

export function getImageByIndex(index) {
  if (!allImages.length) return ''
  const i = Math.abs(Number(index)) % allImages.length
  return allImages[i]
}


