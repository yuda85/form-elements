import { Component, Listen, Prop, h } from '@stencil/core';
import { IFormData } from '../../types/form-data.interface';

@Component({
  tag: 'wc-form',
  styleUrl: 'wc-form.scss',
  shadow: true,
})
export class WcForm {
  @Prop({ mutable: true }) form: IFormData;

  @Listen('inputChange')
  handleInputChange(data) {
    console.log(data);
    this.form = { ...this.form, ...data.detail };
    console.log(this.form);
  }

  @Listen('mySelectChange')
  handleSelectChange(ev): void {
    console.log(ev.detail);
    this.form = { ...this.form, option: ev.detail };
  }

  @Listen('checkboxChange')
  handleCheckboxChange(ev): void {
    this.form = { ...this.form, selected: ev.detail };
  }

  public submit(e: SubmitEvent): void {
    e.preventDefault();
    console.log(this.form);
    debugger;
  }

  render() {
    return (
      <form onSubmit={e => this.submit(e as SubmitEvent)}>
        <wc-input label={'name'}></wc-input>
        <br />
        <wc-input label={'phone'} type={'number'}></wc-input>
        <br />
        <slot></slot>

        <button>Submit</button>
      </form>
    );
  }
}
