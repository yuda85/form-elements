import { newSpecPage } from '@stencil/core/testing';
import { WcCheckbox } from '../wc-checkbox';

describe('wc-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcCheckbox],
      html: `<wc-checkbox></wc-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-checkbox>
    `);
  });
});
