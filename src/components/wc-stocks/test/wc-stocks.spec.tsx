import { newSpecPage } from '@stencil/core/testing';
import { WcStocks } from '../wc-stocks';

describe('wc-stocks', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcStocks],
      html: `<wc-stocks></wc-stocks>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-stocks>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-stocks>
    `);
  });
});
