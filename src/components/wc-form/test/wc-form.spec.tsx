import { newSpecPage } from '@stencil/core/testing';
import { WcForm } from '../wc-form';

describe('wc-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcForm],
      html: `<wc-form></wc-form>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-form>
    `);
  });
});
