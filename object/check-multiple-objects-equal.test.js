import { it, expect } from 'vitest';
import { multiObjEqual } from './check-multiple-objects-equal';

it('multiObjEqual', () => {
  expect(multiObjEqual({key1: 'a', key2: 'b'}, {key1: 'a', key2: 'b'})).toStrictEqual(true)
  expect(multiObjEqual({key1: 'a', key2: 'c'}, {key1: 'a', key2: 'b'})).toStrictEqual(false)
})
