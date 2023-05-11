import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'wc-checkbox',
  styleUrl: 'wc-checkbox.scss',
  shadow: true,
})
export class WcCheckbox {
  @Prop({ mutable: true }) checked: boolean = false;

  @Event({
    eventName: 'checkboxChange',
    bubbles: true,
  })
  checkboxChange: EventEmitter<boolean>;

  public toggleCheckbox(): void {
    console.log('asdasdas');
    this.checked = !this.checked;
    this.checkboxChange.emit(this.checked);
  }

  render() {
    return (
      <Host>
        <label class="custom-checkbox">
          <input type="checkbox" checked={this.checked} onClick={() => this.toggleCheckbox()} />
          <span class="checkmark"></span>

          <slot></slot>
        </label>
      </Host>
    );
  }
}
