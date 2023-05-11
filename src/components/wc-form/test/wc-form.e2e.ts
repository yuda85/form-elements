import { newE2EPage } from '@stencil/core/testing';

describe('wc-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-form></wc-form>');

    const element = await page.find('wc-form');
    expect(element).toHaveClass('hydrated');
  });
});
