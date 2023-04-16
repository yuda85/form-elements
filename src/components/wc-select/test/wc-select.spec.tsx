import { newSpecPage } from '@stencil/core/testing';
import { WcSelect } from '../wc-select';

describe('wc-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcSelect],
      html: `<wc-select></wc-select>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-select>
    `);
  });
});
