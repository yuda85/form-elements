import { Component, h, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'wc-select',
  styleUrl: 'wc-select.scss',
  shadow: true,
})
export class WcSelect {
  @Prop() options: string[] = [];
  @Prop() defaultValue: string = '';
  @State() value: string = this.defaultValue;
  @State() isOpen: boolean = false;
  @Event() mySelectChange: EventEmitter<string>;

  componentWillLoad() {
    this.value = this.defaultValue;
  }

  handleOptionClick(option: string) {
    this.value = option;
    this.isOpen = false;
    this.mySelectChange.emit(this.value);
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  render() {
    return (
      <div class="my-select">
        <div class="my-select__value" onClick={() => this.toggleOpen()}>
          {this.value || 'Select...'}
          <i class={`fas fa-chevron-${this.isOpen ? 'up' : 'down'}`}></i>
        </div>
        {this.isOpen && (
          <div class="my-select__options">
            {this.options.map(option => (
              <div class="my-select__option" onClick={() => this.handleOptionClick(option)}>
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
