import { newE2EPage } from '@stencil/core/testing';

describe('wc-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-select></wc-select>');

    const element = await page.find('wc-select');
    expect(element).toHaveClass('hydrated');
  });
});
