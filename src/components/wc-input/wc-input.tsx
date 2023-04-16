import { Component, h, Prop } from '@stencil/core';
import { InputType } from '../../types/input.types';

@Component({
  tag: 'wc-input',
  styleUrl: 'wc-input.scss',
  shadow: true,
})
export class WcInput {
  @Prop() type: InputType = 'text';
  @Prop() disabled: boolean = false;
  @Prop() label: string = 'My Label';

  render() {
    return (
      <div class="input">
        <label>{this.label}</label>
        <input name={this.label} type={this.type} disabled={this.disabled} />
      </div>
    );
  }
}
