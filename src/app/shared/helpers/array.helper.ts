export const increaseArr = (arr: number[]) => {
  if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === 'number')) {
    return false;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};
