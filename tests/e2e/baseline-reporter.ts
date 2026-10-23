import type { FullResult, Reporter, TestCase, TestResult } from '@playwright/test/reporter';

const galleryDefect = 'known baseline defect: gallery copy intercepts the next-image pointer click';

// Expected-failure annotations apply to the whole test, including teardown.
// Validate the final error list so unrelated fixture/browser errors cannot hide.
export function validateExpectedFailure(
  title: string,
  expectedStatus: string,
  result: Pick<TestResult, 'status' | 'errors'>,
): string | undefined {
  if (expectedStatus !== 'failed') return;
  const message = result.errors[0]?.message ?? '';
  if (
    title !== galleryDefect || result.status !== 'failed' || result.errors.length !== 1 ||
    !message.includes('locator.click: Timeout 5000ms exceeded') ||
    !message.includes('car-details-gallery-copy') || !message.includes('intercepts pointer events')
  ) {
    return 'Expected failure must contain only the recorded gallery pointer timeout: ' + title;
  }
}

export default class BaselineReporter implements Reporter {
  private violations: string[] = [];

  onTestEnd(test: TestCase, result: TestResult) {
    const violation = validateExpectedFailure(test.title, test.expectedStatus, result);
    if (violation) this.violations.push(violation);
  }

  async onEnd(_result: FullResult): Promise<{ status: 'failed' } | undefined> {
    if (this.violations.length) {
      for (const violation of this.violations) console.error(violation);
      return { status: 'failed' };
    }
  }
}
