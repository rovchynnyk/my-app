export const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export const noop = function(): void {};
