/**
 * Convert Pixels to rem
 * @param pixels - Pixel value to be converted
 * @returns O valor convertido em REM
 */

export function pxToRem(pixels: number): string {
  return `${pixels / 16}rem`
}
