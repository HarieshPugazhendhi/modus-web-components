import { newSpecPage } from '@stencil/core/testing';
import { ModusButton } from './modus-button';

describe('modus-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [ModusButton],
      html: '<modus-button></modus-button>',
    });
    expect(root).toEqualHtml(`
      <modus-button>
        <mock:shadow-root>
          <button class="size-medium color-primary style-fill" role="button">
            <span class="label">
               <slot></slot>
            </span>
          </button>
        </mock:shadow-root>
      </modus-button>
    `);
  });

  it('renders with slot value', async () => {
    const { root } = await newSpecPage({
      components: [ModusButton],
      html: `<modus-button>Button</modus-button>`,
    });
    expect(root).toEqualHtml(`
      <modus-button>
        <mock:shadow-root>
          <button class="size-medium color-primary style-fill" role="button">
            <span class="label">
                <slot></slot>
            </span>
          </button>
        </mock:shadow-root>
        Button
      </modus-button>
    `);
  });

  it('renders icon only', async () => {
    const { root } = await newSpecPage({
      components: [ModusButton],
      html: `<modus-button icon-only="add"></modus-button>`,
    });
    expect(root).toEqualHtml(`
      <modus-button icon-only="add">
            <mock:shadow-root>
              <button class="color-primary icon-only size-medium style-fill" role="button">
                <span class="icon">
                  <svg class="icon-add" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 11h-6V5c0-.55-.45-1-1-1s-1 .45-1 1v6H5c-.55 0-1 .45-1 1s.45 1 1 1h6v6c0 .55.45 1 1 1s1-.45 1-1v-6h6c.55 0 1-.45 1-1s-.45-1-1-1"></path>
                  </svg>
                </span>
              </button>
            </mock:shadow-root>
          </modus-button>
    `);
  });

  it('should get the correct class by buttonStyle', async () => {
    const modusButton = new ModusButton();
    let className = modusButton.classByButtonStyle.get(modusButton.buttonStyle);
    expect(className).toEqual('style-fill');

    className = modusButton.classByButtonStyle.get('borderless');
    expect(className).toEqual('style-borderless');

    className = modusButton.classByButtonStyle.get('outline');
    expect(className).toEqual('style-outline');
  });

  it('should get the correct class by color', async () => {
    const modusButton = new ModusButton();
    let className = modusButton.classByColor.get(modusButton.color);
    expect(className).toEqual('color-primary');

    className = modusButton.classByColor.get('danger');
    expect(className).toEqual('color-danger');

    className = modusButton.classByColor.get('primary');
    expect(className).toEqual('color-primary');

    className = modusButton.classByColor.get('secondary');
    expect(className).toEqual('color-secondary');

    className = modusButton.classByColor.get('tertiary');
    expect(className).toEqual('color-tertiary');

    className = modusButton.classByColor.get('dark');
    expect(className).toEqual('color-dark');
  });

  it('should get the correct class by size', async () => {
    const modusButton = new ModusButton();
    let className = modusButton.classBySize.get(modusButton.size);
    expect(className).toEqual('size-medium');

    className = modusButton.classBySize.get('small');
    expect(className).toEqual('size-small');

    className = modusButton.classBySize.get('large');
    expect(className).toEqual('size-large');
  });
});
