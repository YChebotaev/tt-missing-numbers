export const findMissing = (array: number[]) => {
  if (array.length === 0 || array.length === 1) return

  array = Array.from(new Set([...array].sort((a, b) => a - b)))

  const min = array[0]

  for (let i = 0; i < array.length; i++) {
    const val = array[i]

    if (i + min !== val) {
      return i + min
    }
  }
}
