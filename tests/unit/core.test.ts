import { test } from 'node:test';
import assert from 'node:assert/strict';
import { estimate } from '../../src/lib/estimate.ts';
import { localizedPath } from '../../src/lib/routes.ts';
test('estimates zero, decimals and maximum values', () => {
  assert.equal(estimate(8,25),200); assert.equal(estimate(0,10),0);
  assert.equal(estimate(1.25,19.99),24.99); assert.equal(estimate(10000,10000),100000000);
});
test('rejects invalid boundaries and non-finite inputs', () => {
  for (const value of [-1,10001,NaN,Infinity]) {
    assert.throws(() => estimate(value,25),RangeError); assert.throws(() => estimate(8,value),RangeError);
  }
});
test('localized paths keep default unprefixed and trailing slashes', () => {
  assert.equal(localizedPath('es'),'/'); assert.equal(localizedPath('en'),'/en/');
  assert.equal(localizedPath('en','/landing/saas/'),'/en/landing/saas/');
});
