import { newE2EPage } from '@stencil/core/testing';

describe('wc-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-container></wc-container>');

    const element = await page.find('wc-container');
    expect(element).toHaveClass('hydrated');
  });
});
