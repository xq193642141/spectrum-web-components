import { css } from 'lit-element';
const styles = css`
#button{display:inline-flex;box-sizing:border-box;align-items:center;justify-content:center;overflow:visible;margin:0;text-transform:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-appearance:button;vertical-align:top;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out;text-decoration:none;font-family:adobe-clean,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;line-height:1.3;cursor:pointer;border-width:var(--spectrum-button-primary-border-size,2px);border-style:solid;border-radius:var(--spectrum-button-primary-border-radius,var(--spectrum-global-dimension-size-200));min-height:var(--spectrum-button-primary-height,var(--spectrum-global-dimension-size-400));height:auto;min-width:var(--spectrum-button-primary-min-width,var(--spectrum-button-cta-min-width));padding:var(--spectrum-global-dimension-size-50) calc(var(--spectrum-button-primary-padding-x,
var(--spectrum-global-dimension-size-200)) - var(--spectrum-button-primary-border-size, 2px));padding-bottom:calc(var(--spectrum-global-dimension-size-50) + .5px);padding-top:calc(var(--spectrum-global-dimension-size-50) - .5px);font-size:var(--spectrum-button-primary-text-size,var(--spectrum-global-dimension-font-size-150));font-weight:var(--spectrum-button-primary-text-font-weight,700)}#button:focus{outline:none;box-shadow:0 0 0 var(--spectrum-button-primary-border-size-increase-key-focus,1px) var(--spectrum-button-primary-border-color-key-focus,#1473e6)}#button::-moz-focus-inner{border:0;border-style:none;padding:0;margin-top:-2px;margin-bottom:-2px}#button:-moz-focusring{outline:1px dotted ButtonText}:host([disabled]) #button{cursor:default}::slotted([slot=icon]){max-height:100%;flex-shrink:0}#button:active,#button:hover{box-shadow:none}slot[name=icon]+#label{margin-left:var(--spectrum-button-primary-text-gap,var(--spectrum-global-dimension-size-100))}#label+::slotted([slot=icon]){margin-left:calc(var(--spectrum-button-primary-text-gap,
var(--spectrum-global-dimension-size-100))/2)}#label{align-self:center;justify-self:center;width:100%}#label:empty{display:none}#button:active{box-shadow:none}:host([variant=cta]) #button{background-color:var(--spectrum-button-cta-background-color,#1473e6);border-color:var(--spectrum-button-cta-border-color,#1473e6);color:var(--spectrum-button-cta-text-color,#fff)}:host([variant=cta]) #button:hover{background-color:var(--spectrum-button-cta-background-color-hover,#0d66d0);border-color:var(--spectrum-button-cta-border-color-hover,#0d66d0);color:var(--spectrum-button-cta-text-color-hover,#fff)}:host([variant=cta]) #button:focus{background-color:var(--spectrum-button-cta-background-color-key-focus,#1473e6);border-color:var(--spectrum-button-cta-border-color-key-focus,#1473e6);color:var(--spectrum-button-cta-text-color-key-focus,#fff)}:host([variant=cta]) #button:active{background-color:var(--spectrum-button-cta-background-color-down,#0d66d0);border-color:var(--spectrum-button-cta-border-color-down,#0d66d0);color:var(--spectrum-button-cta-text-color-down,#fff)}:host([variant=cta][disabled]) #button{background-color:var(--spectrum-button-cta-background-color-disabled,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-button-cta-border-color-disabled,var(--spectrum-global-color-gray-200));color:var(--spectrum-button-cta-text-color-disabled,var(--spectrum-global-color-gray-500))}:host([variant=primary]) #button{background-color:var(--spectrum-button-primary-background-color,transparent);border-color:var(--spectrum-button-primary-border-color,var(--spectrum-global-color-gray-800));color:var(--spectrum-button-primary-text-color,var(--spectrum-global-color-gray-800))}:host([variant=primary]) #button:hover{background-color:var(--spectrum-button-primary-background-color-hover,var(--spectrum-global-color-gray-800));border-color:var(--spectrum-button-primary-border-color-hover,var(--spectrum-global-color-gray-800));color:var(--spectrum-button-primary-text-color-hover,var(--spectrum-global-color-gray-50))}:host([variant=primary]) #button:focus{background-color:var(--spectrum-button-primary-background-color-key-focus,#1473e6);border-color:var(--spectrum-button-primary-border-color-key-focus,#1473e6);color:var(--spectrum-button-primary-text-color-key-focus,#fff)}:host([variant=primary]) #button:active{background-color:var(--spectrum-button-primary-background-color-down,var(--spectrum-global-color-gray-900));border-color:var(--spectrum-button-primary-border-color-down,var(--spectrum-global-color-gray-900));color:var(--spectrum-button-primary-text-color-down,var(--spectrum-global-color-gray-50))}:host([variant=primary][disabled]) #button{background-color:var(--spectrum-button-primary-background-color-disabled,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-button-primary-border-color-disabled,var(--spectrum-global-color-gray-200));color:var(--spectrum-button-primary-text-color-disabled,var(--spectrum-global-color-gray-500))}:host([variant=secondary]) #button{background-color:var(--spectrum-button-secondary-background-color,transparent);border-color:var(--spectrum-button-secondary-border-color,var(--spectrum-global-color-gray-700));color:var(--spectrum-button-secondary-text-color,var(--spectrum-global-color-gray-700))}:host([variant=secondary]) #button:hover{background-color:var(--spectrum-button-secondary-background-color-hover,var(--spectrum-global-color-gray-700));border-color:var(--spectrum-button-secondary-border-color-hover,var(--spectrum-global-color-gray-700));color:var(--spectrum-button-secondary-text-color-hover,var(--spectrum-global-color-gray-50))}:host([variant=secondary]) #button:focus{background-color:var(--spectrum-button-secondary-background-color-key-focus,#1473e6);border-color:var(--spectrum-button-secondary-border-color-key-focus,#1473e6);color:var(--spectrum-button-secondary-text-color-key-focus,#fff)}:host([variant=secondary]) #button:active{background-color:var(--spectrum-button-secondary-background-color-down,var(--spectrum-global-color-gray-800));border-color:var(--spectrum-button-secondary-border-color-down,var(--spectrum-global-color-gray-800));color:var(--spectrum-button-secondary-text-color-down,var(--spectrum-global-color-gray-50))}:host([variant=secondary][disabled]) #button{background-color:var(--spectrum-button-secondary-background-color-disabled,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-button-secondary-border-color-disabled,var(--spectrum-global-color-gray-200));color:var(--spectrum-button-secondary-text-color-disabled,var(--spectrum-global-color-gray-500))}:host([variant=negative]) #button{background-color:var(--spectrum-button-warning-background-color,transparent);border-color:var(--spectrum-button-warning-border-color,var(--spectrum-global-color-red-600));color:var(--spectrum-button-warning-text-color,var(--spectrum-global-color-red-600))}:host([variant=negative]) #button:hover{background-color:var(--spectrum-button-warning-background-color-hover,var(--spectrum-global-color-red-600));border-color:var(--spectrum-button-warning-border-color-hover,var(--spectrum-global-color-red-600));color:var(--spectrum-button-warning-text-color-hover,var(--spectrum-global-color-gray-50))}:host([variant=negative]) #button:focus{background-color:var(--spectrum-button-warning-background-color-key-focus,#1473e6);border-color:var(--spectrum-button-warning-border-color-key-focus,#1473e6);color:var(--spectrum-button-warning-text-color-key-focus,#fff)}:host([variant=negative]) #button:active{background-color:var(--spectrum-button-warning-background-color-down,var(--spectrum-global-color-red-700));border-color:var(--spectrum-button-warning-border-color-down,var(--spectrum-global-color-red-700));color:var(--spectrum-button-warning-text-color-down,var(--spectrum-global-color-gray-50))}:host([variant=negative][disabled]) #button{background-color:var(--spectrum-button-warning-background-color-disabled,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-button-warning-border-color-disabled,var(--spectrum-global-color-gray-200));color:var(--spectrum-button-warning-text-color-disabled,var(--spectrum-global-color-gray-500))}:host([variant=overBackground]) #button{background-color:var(--spectrum-button-over-background-background-color,transparent);border-color:var(--spectrum-button-over-background-border-color,#fff);color:var(--spectrum-button-over-background-text-color,#fff)}:host([variant=overBackground]) #button:hover{background-color:var(--spectrum-button-over-background-background-color-hover,#fff);border-color:var(--spectrum-button-over-background-border-color-hover,#fff);color:inherit}:host([variant=overBackground]) #button:focus{background-color:var(--spectrum-button-over-background-background-color-key-focus,#fff);border-color:var(--spectrum-button-over-background-border-color-key-focus,#fff);color:inherit;box-shadow:0 0 0 var(--spectrum-button-primary-border-size-increase-key-focus,1px) var(--spectrum-button-over-background-border-color-key-focus,#fff)}:host([variant=overBackground]) #button:active{background-color:var(--spectrum-button-over-background-background-color-down,#fff);border-color:var(--spectrum-button-over-background-border-color-down,#fff);color:inherit;box-shadow:none}:host([variant=overBackground][disabled]) #button{background-color:var(--spectrum-button-over-background-background-color-disabled,hsla(0,0%,100%,.1));border-color:var(--spectrum-button-over-background-border-color-disabled,transparent);color:var(--spectrum-button-over-background-text-color-disabled,hsla(0,0%,100%,.35))}:host([variant=overBackground][quiet]) #button{background-color:var(--spectrum-button-quiet-over-background-background-color,transparent);border-color:var(--spectrum-button-quiet-over-background-border-color,transparent);color:var(--spectrum-button-quiet-over-background-text-color,#fff)}:host([variant=overBackground][quiet]) #button:hover{background-color:var(--spectrum-button-quiet-over-background-background-color-hover,hsla(0,0%,100%,.1));border-color:var(--spectrum-button-quiet-over-background-border-color-hover,transparent);color:var(--spectrum-button-quiet-over-background-text-color-hover,#fff)}:host([variant=overBackground][quiet]) #button:focus{background-color:var(--spectrum-button-quiet-over-background-background-color-key-focus,#fff);border-color:var(--spectrum-button-quiet-over-background-border-color-key-focus,#fff);color:inherit;box-shadow:0 0 0 var(--spectrum-button-primary-border-size-increase-key-focus,1px) var(--spectrum-button-quiet-over-background-border-color-key-focus,#fff)}:host([variant=overBackground][quiet]) #button:active{background-color:var(--spectrum-button-quiet-over-background-background-color-down,hsla(0,0%,100%,.15));border-color:var(--spectrum-button-quiet-over-background-border-color-down,transparent);color:var(--spectrum-button-quiet-over-background-text-color-down,#fff);box-shadow:none}:host([variant=overBackground][quiet][disabled]) #button{background-color:var(--spectrum-button-quiet-over-background-background-color-disabled,transparent);border-color:var(--spectrum-button-quiet-over-background-border-color-disabled,transparent);color:var(--spectrum-button-quiet-over-background-text-color-disabled,hsla(0,0%,100%,.15))}:host([variant=primary][quiet]) #button{background-color:var(--spectrum-button-quiet-primary-background-color,transparent);border-color:var(--spectrum-button-quiet-primary-border-color,transparent);color:var(--spectrum-button-quiet-primary-text-color,var(--spectrum-global-color-gray-800))}:host([variant=primary][quiet]) #button:hover{background-color:var(--spectrum-button-quiet-primary-background-color-hover,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-button-quiet-primary-border-color-hover,var(--spectrum-global-color-gray-200));color:var(--spectrum-button-quiet-primary-text-color-hover,var(--spectrum-global-color-gray-900))}:host([variant=primary][quiet]) #button:focus{background-color:var(--spectrum-button-quiet-primary-background-color-key-focus,#1473e6);border-color:var(--spectrum-button-quiet-primary-border-color-key-focus,#1473e6);color:var(--spectrum-button-quiet-primary-text-color-key-focus,#fff)}:host([variant=primary][quiet]) #button:active{background-color:var(--spectrum-button-quiet-primary-background-color-down,var(--spectrum-global-color-gray-300));border-color:var(--spectrum-button-quiet-primary-border-color-down,var(--spectrum-global-color-gray-300));color:var(--spectrum-button-quiet-primary-text-color-down,var(--spectrum-global-color-gray-900))}:host([variant=primary][quiet][disabled]) #button{background-color:var(--spectrum-button-quiet-primary-background-color-disabled,transparent);border-color:var(--spectrum-button-quiet-primary-border-color-disabled,transparent);color:var(--spectrum-button-quiet-primary-text-color-disabled,var(--spectrum-global-color-gray-500))}:host([variant=secondary][quiet]) #button{background-color:var(--spectrum-button-quiet-secondary-background-color,transparent);border-color:var(--spectrum-button-quiet-secondary-border-color,transparent);color:var(--spectrum-button-quiet-secondary-text-color,var(--spectrum-global-color-gray-700))}:host([variant=secondary][quiet]) #button:hover{background-color:var(--spectrum-button-quiet-secondary-background-color-hover,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-button-quiet-secondary-border-color-hover,var(--spectrum-global-color-gray-200));color:var(--spectrum-button-quiet-secondary-text-color-hover,var(--spectrum-global-color-gray-800))}:host([variant=secondary][quiet]) #button:focus{background-color:var(--spectrum-button-quiet-secondary-background-color-key-focus,#1473e6);border-color:var(--spectrum-button-quiet-secondary-border-color-key-focus,#1473e6);color:var(--spectrum-button-quiet-secondary-text-color-key-focus,#fff)}:host([variant=secondary][quiet]) #button:active{background-color:var(--spectrum-button-quiet-secondary-background-color-down,var(--spectrum-global-color-gray-300));border-color:var(--spectrum-button-quiet-secondary-border-color-down,var(--spectrum-global-color-gray-300));color:var(--spectrum-button-quiet-secondary-text-color-down,var(--spectrum-global-color-gray-800))}:host([variant=secondary][quiet][disabled]) #button{background-color:var(--spectrum-button-quiet-secondary-background-color-disabled,transparent);border-color:var(--spectrum-button-quiet-secondary-border-color-disabled,transparent);color:var(--spectrum-button-quiet-secondary-text-color-disabled,var(--spectrum-global-color-gray-500))}:host([variant=negative][quiet]) #button{background-color:var(--spectrum-button-quiet-warning-background-color,transparent);border-color:var(--spectrum-button-quiet-warning-border-color,transparent);color:var(--spectrum-button-quiet-warning-text-color,var(--spectrum-global-color-red-500))}:host([variant=negative][quiet]) #button:hover{background-color:var(--spectrum-button-quiet-warning-background-color-hover,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-button-quiet-warning-border-color-hover,var(--spectrum-global-color-gray-200));color:var(--spectrum-button-quiet-warning-text-color-hover,var(--spectrum-global-color-red-600))}:host([variant=negative][quiet]) #button:focus{background-color:var(--spectrum-button-quiet-warning-background-color-key-focus,#1473e6);border-color:var(--spectrum-button-quiet-warning-border-color-key-focus,#1473e6);color:var(--spectrum-button-quiet-warning-text-color-key-focus,#fff)}:host([variant=negative][quiet]) #button:active{background-color:var(--spectrum-button-quiet-warning-background-color-down,var(--spectrum-global-color-gray-300));border-color:var(--spectrum-button-quiet-warning-border-color-down,var(--spectrum-global-color-gray-300));color:var(--spectrum-button-quiet-warning-text-color-down,var(--spectrum-global-color-red-600))}:host([variant=negative][quiet][disabled]) #button{background-color:var(--spectrum-button-quiet-warning-background-color-disabled,transparent);border-color:var(--spectrum-button-quiet-warning-border-color-disabled,transparent);color:var(--spectrum-button-quiet-warning-text-color-disabled,var(--spectrum-global-color-gray-500))}:host{display:inline-flex;flex-direction:row}#button{display:flex;flex:1 1 auto;-webkit-appearance:none}#button:focus,:host(:focus){outline:none}:host([disabled]){pointer-events:none}slot[name=icon]::slotted(svg){fill:currentColor;stroke:currentColor;width:var(--spectrum-alias-workflow-icon-size,18px);height:var(--spectrum-alias-workflow-icon-size,18px)}
`;
export default styles;