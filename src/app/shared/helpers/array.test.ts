import { increaseArr } from './array.helper';

describe('Type of input is not array', () => {
  it('Type of input is string', () => {
    expect(increaseArr('abc')).toBe(false);
  });
  it('Type of input is number', () => {
    expect(increaseArr(123)).toBe(false);
  });
  it('Type of input is null', () => {
    expect(increaseArr(null)).toBe(false);
  });
  it('Type of input is undefine', () => {
    expect(increaseArr(undefined)).toBe(false);
  });
  it('Type of input is object', () => {
    expect(increaseArr({})).toBe(false);
  });
});

describe('Array length is less than 2', () => {
  it('Array is empty', () => {
    expect(increaseArr([])).toBe(false);
  });
  it('Array has only one element', () => {
    expect(increaseArr([1])).toBe(false);
  });
});

describe('Array length is from and more than 2, but there is one element is not number', () => {
  it('One element in array is string', () => {
    expect(increaseArr(['1', 2])).toBe(false);
  });
  it('One element in array is null', () => {
    expect(increaseArr([null, 2])).toBe(false);
  });
  it('One element in array is undefined', () => {
    expect(increaseArr([undefined, 2])).toBe(false);
  });
  it('One element in array is undefined', () => {
    expect(increaseArr([undefined, 2])).toBe(false);
  });
  it('One element in array is array', () => {
    expect(increaseArr([[], 1, 2, 3])).toBe(false);
  });
});

describe('Array length is from and more than 2, all elements are number but the array is not increasable', () => {
  it('Array is not increasable', () => {
    expect(increaseArr([2, 1])).toBe(false);
  });
  it('Array is not increasable', () => {
    expect(increaseArr([1.5, 2, 1])).toBe(false);
  });
});

describe('Array length is from and more than 2, all elements are number and the array is increasable', () => {
  it('Array is not increasable', () => {
    expect(increaseArr([1, 2])).toBe(true);
  });
  it('Array is not increasable', () => {
    expect(increaseArr([1, 1.5, 2])).toBe(true);
  });
});
