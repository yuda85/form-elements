import { newSpecPage } from '@stencil/core/testing';
import { WcInput } from '../wc-input';

describe('wc-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcInput],
      html: `<wc-input></wc-input>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-input>
    `);
  });
});
