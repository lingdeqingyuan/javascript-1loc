import { it, expect } from 'vitest';
import castArray from './cast-value-as-array';

it('castArray', () => {
  expect(castArray(1)).toStrictEqual([1])
  expect(castArray([1,2,3])).toStrictEqual([1,2,3])
})
