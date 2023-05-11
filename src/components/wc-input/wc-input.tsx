import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
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

  @Event({ bubbles: true }) inputChange: EventEmitter<{ [label: string]: any }>;

  public handleInputChange(ev) {
    this.inputChange.emit({ [this.label]: ev.target.value });
  }

  render() {
    return (
      <div class="input">
        <label>{this.label}</label>
        <input onInput={e => this.handleInputChange(e)} name={this.label} type={this.type} disabled={this.disabled} />
      </div>
    );
  }
}
