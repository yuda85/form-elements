import { newE2EPage } from '@stencil/core/testing';

describe('wc-stocks', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-stocks></wc-stocks>');

    const element = await page.find('wc-stocks');
    expect(element).toHaveClass('hydrated');
  });
});
