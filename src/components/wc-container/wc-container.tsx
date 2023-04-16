import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'wc-container',
  styleUrl: 'wc-container.scss',
  shadow: true,
})
export class WcContainer {
  render() {
    return (
      <Host>
        <slot>
          <wc-select options={['Option 1', 'Option 2', 'Option 3']}></wc-select>
        </slot>
      </Host>
    );
  }
}
