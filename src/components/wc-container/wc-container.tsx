import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'wc-container',
  styleUrl: 'wc-container.scss',
  shadow: true,
})
export class WcContainer {
  public checkBoxChange(ev: CustomEvent<boolean>): void {
    // console.log('Is Checkbox Checked??? ', ev.detail);
  }

  render() {
    return (
      <Host>
        <h1>My Stocks</h1>

        <wc-stocks symbol={'AAPL'}></wc-stocks>
        {/* <wc-form>
          <wc-select options={['Option 1', 'Option 2', 'Option 3']}></wc-select>
          <wc-checkbox checked={true}></wc-checkbox>
        </wc-form> */}
      </Host>
    );
  }
}
