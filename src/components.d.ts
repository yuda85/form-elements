/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { InputType } from "./types/input.types";
export { InputType } from "./types/input.types";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface WcInput {
        "disabled": boolean;
        "label": string;
        "type": InputType;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLWcInputElement extends Components.WcInput, HTMLStencilElement {
    }
    var HTMLWcInputElement: {
        prototype: HTMLWcInputElement;
        new (): HTMLWcInputElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "wc-input": HTMLWcInputElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface WcInput {
        "disabled"?: boolean;
        "label"?: string;
        "type"?: InputType;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "wc-input": WcInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "wc-input": LocalJSX.WcInput & JSXBase.HTMLAttributes<HTMLWcInputElement>;
        }
    }
}
