import { newSpecPage } from '@stencil/core/testing';
import { WcContainer } from '../wc-container';

describe('wc-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcContainer],
      html: `<wc-container></wc-container>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-container>
    `);
  });
});
