import { css } from 'lit-element';
const styles = css`
:host{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}#illustration{margin-bottom:24px;color:var(--spectrum-global-color-gray-500);fill:currentColor;stroke:currentColor}#heading{max-width:500px;margin:0}#description{max-width:500px;margin:4px 0 0;font-style:italic}:host([cta]) #description{font-style:normal}#heading{font-size:var(--spectrum-heading-quiet-2-text-size,var(--spectrum-alias-heading2-text-size));font-weight:var(--spectrum-heading-quiet-2-text-font-weight,300);line-height:var(--spectrum-heading-quiet-2-text-line-height,1.3);font-style:var(--spectrum-heading-quiet-2-text-font-style,normal);letter-spacing:var(--spectrum-heading-quiet-2-text-letter-spacing,0);text-transform:var(--spectrum-heading-quiet-2-text-transform,none);margin-top:0;margin-bottom:0}
`;
export default styles;