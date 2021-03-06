/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import {
    html,
    property,
    CSSResultArray,
    TemplateResult,
    PropertyValues,
} from 'lit-element';
import { Tab } from '@spectrum-web-components/tab';
import { Focusable, getActiveElement } from '@spectrum-web-components/shared';

import tabStyles from './tab-list.css.js';

const availableArrowsByDirection = {
    vertical: ['ArrowUp', 'ArrowDown'],
    ['vertical-right']: ['ArrowUp', 'ArrowDown'],
    horizontal: ['ArrowLeft', 'ArrowRight'],
};

/**
 * @slot - Child tab elements
 * @attr {Boolean} quiet - The tab-list border is a lot smaller
 * @attr {Boolean} compact - The collection of tabs take up less space
 */

export class TabList extends Focusable {
    public static get styles(): CSSResultArray {
        return [tabStyles];
    }
    @property({ reflect: true })
    public direction: 'vertical' | 'vertical-right' | 'horizontal' =
        'horizontal';

    @property()
    public selectionIndicatorStyle = '';

    @property({ type: String, reflect: true })
    public value = '';

    @property({ reflect: true })
    public get selected(): string {
        return this._selected;
    }

    public set selected(value: string) {
        const oldValue = this.selected;

        if (value === oldValue) {
            return;
        }
        this.updateCheckedState(value);

        this._selected = value;
        this.requestUpdate('selected', oldValue);
    }

    private _selected = '';

    private tabs: Tab[] = [];

    public get focusElement(): Tab {
        return (this.querySelector('[tabindex="0"]') ||
            this.querySelector('sp-tab')) as Tab;
    }

    protected manageAutoFocus(): void {
        const tabs = [...this.querySelectorAll('[role="tab"]')] as Tab[];
        const tabUpdateCompletes = tabs.map((tab) => tab.updateComplete);
        Promise.all(tabUpdateCompletes).then(() => super.manageAutoFocus());
    }

    protected render(): TemplateResult {
        return html`
            <slot
                @click=${this.onClick}
                @keydown=${this.onKeyDown}
                @slotchange=${this.onSlotChange}
            ></slot>
            <div
                id="selectionIndicator"
                style=${this.selectionIndicatorStyle}
            ></div>
        `;
    }

    protected firstUpdated(changes: PropertyValues): void {
        super.firstUpdated(changes);
        this.setAttribute('role', 'tablist');
        this.addEventListener('focusin', this.startListeningToKeyboard);
        this.addEventListener('focusout', this.stopListeningToKeyboard);
    }

    protected updated(changes: PropertyValues): void {
        super.updated(changes);
        if (changes.has('direction')) {
            if (this.direction === 'horizontal') {
                this.removeAttribute('aria-orientation');
            } else {
                this.setAttribute('aria-orientation', 'vertical');
            }
        }
    }

    private isListeningToKeyboard = false;

    public startListeningToKeyboard = (): void => {
        this.addEventListener('keydown', this.handleKeydown);
        this.isListeningToKeyboard = true;
    };

    public stopListeningToKeyboard = (): void => {
        this.isListeningToKeyboard = false;
        this.removeEventListener('keydown', this.handleKeydown);
    };

    public handleKeydown(event: KeyboardEvent): void {
        const { code } = event;
        const availableArrows = availableArrowsByDirection[this.direction];
        if (!availableArrows.includes(code)) {
            return;
        }
        event.preventDefault();
        const currentFocusedTab = getActiveElement(this) as Tab;
        let currentFocusedTabIndex = this.tabs.indexOf(currentFocusedTab);
        currentFocusedTabIndex += code === availableArrows[0] ? -1 : 1;
        this.tabs[
            (currentFocusedTabIndex + this.tabs.length) % this.tabs.length
        ].focus();
    }

    private onClick(event: Event): void {
        const target = event.target as HTMLElement;
        this.selectTarget(target);
        if (this.isListeningToKeyboard) {
            /* Trick :focus-visible polyfill into thinking keyboard based focus */
            this.dispatchEvent(
                new KeyboardEvent('keydown', {
                    code: 'Tab',
                })
            );
            target.focus();
        }
    }

    private onKeyDown(event: KeyboardEvent): void {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            const target = event.target as HTMLElement;
            /* istanbul ignore else */
            if (target) {
                this.selectTarget(target);
            }
        }
    }

    private selectTarget(target: HTMLElement): void {
        const value = target.getAttribute('value');
        if (value) {
            const selected = this.selected;
            this.selected = value;
            const applyDefault = this.dispatchEvent(
                new Event('change', {
                    cancelable: true,
                })
            );
            if (!applyDefault) {
                this.selected = selected;
            }
        }
    }

    private onSlotChange(): void {
        this.updateCheckedState(this.selected);
        this.tabs = [...this.querySelectorAll('[role="tab"]')] as Tab[];
    }

    private updateCheckedState(value: string): void {
        const previousChecked = this.querySelectorAll('[selected]');

        previousChecked.forEach((element) => {
            element.removeAttribute('selected');
        });

        if (value.length) {
            const currentChecked = this.querySelector(`[value="${value}"]`);

            if (currentChecked) {
                currentChecked.setAttribute('selected', '');
            } else {
                this.selected = '';
            }
        }
        if (!this.selected) {
            const firstTab = this.querySelector('[role="tab"]');
            if (firstTab) {
                firstTab.setAttribute('tabindex', '0');
            }
        }

        this.updateSelectionIndicator();
    }

    private async updateSelectionIndicator(): Promise<void> {
        const selectedElement = this.querySelector('[selected]') as Tab;
        if (!selectedElement) {
            return;
        }
        await selectedElement.updateComplete;
        const bounds = selectedElement.getBoundingClientRect();

        if (this.direction === 'horizontal') {
            const width = bounds.width;
            const parentOffset = this.getBoundingClientRect().left;
            const offset = bounds.left - parentOffset;

            this.selectionIndicatorStyle = `width: ${width}px; transform: translateX(${offset}px)`;
        } else {
            const height = bounds.height;
            const parentOffset = this.getBoundingClientRect().top;
            const offset = bounds.top - parentOffset;

            this.selectionIndicatorStyle = `height: ${height}px; transform: translateY(${offset}px)`;
        }
    }
}
