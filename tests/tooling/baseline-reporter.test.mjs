import test from 'node:test';
import assert from 'node:assert/strict';
import BaselineReporter, { validateExpectedFailure } from '../e2e/baseline-reporter.ts';

const title = 'known baseline defect: gallery copy intercepts the next-image pointer click';
const error = { message: 'Error: locator.click: Timeout 5000ms exceeded. car-details-gallery-copy intercepts pointer events' };
const result = { status: 'failed', errors: [error] };

test('accepts the single recorded gallery obstruction', () => {
  assert.equal(validateExpectedFailure(title, 'failed', result), undefined);
});
test('rejects a second teardown or browser-health error', () => {
  assert.ok(validateExpectedFailure(title, 'failed', { ...result, errors: [error, { message: 'Unexpected console error' }] }));
});
test('rejects a different obstruction or assertion', () => {
  assert.ok(validateExpectedFailure(title, 'failed', { ...result, errors: [{ message: 'Unrelated locator timeout' }] }));
});
test('rejects an unexpected pass and a whole-test timeout', () => {
  assert.ok(validateExpectedFailure(title, 'failed', { status: 'passed', errors: [] }));
  assert.ok(validateExpectedFailure(title, 'failed', { ...result, status: 'timedOut' }));
});
test('rejects an unreviewed expected-failure annotation', () => {
  assert.ok(validateExpectedFailure('another test', 'failed', result));
});
test('leaves ordinary pass/fail classification to Playwright', () => {
  assert.equal(validateExpectedFailure('ordinary test', 'passed', result), undefined);
});

test('reporter overrides a successful run when an expected test hides an extra error', async t => {
  t.mock.method(console, 'error', () => {});
  const reporter = new BaselineReporter();
  reporter.onTestEnd({ title, expectedStatus: 'failed' }, {
    ...result, errors: [error, { message: 'Unexpected teardown error' }],
  });
  assert.deepEqual(await reporter.onEnd({ status: 'passed' }), { status: 'failed' });
});
