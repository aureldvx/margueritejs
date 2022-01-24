import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { MargueriteEditor } from '../src/MargueriteEditor.js';
import '../src/marguerite-editor.js';

describe('MargueriteEditor', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<MargueriteEditor>(html`<marguerite-editor></marguerite-editor>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<MargueriteEditor>(html`<marguerite-editor></marguerite-editor>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<MargueriteEditor>(html`<marguerite-editor title="attribute title"></marguerite-editor>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<MargueriteEditor>(html`<marguerite-editor></marguerite-editor>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
