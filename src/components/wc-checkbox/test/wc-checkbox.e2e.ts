import { newE2EPage } from '@stencil/core/testing';

describe('wc-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-checkbox></wc-checkbox>');

    const element = await page.find('wc-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
