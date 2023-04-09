import { newE2EPage } from '@stencil/core/testing';

describe('wc-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-input></wc-input>');

    const element = await page.find('wc-input');
    expect(element).toHaveClass('hydrated');
  });
});
