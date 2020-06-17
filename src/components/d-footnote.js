// Copyright 2018 The Distill Template Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Template } from '../mixins/template.js';

const T = Template('d-footnote', `
<style>

d-math[block] {
  display: block;
}

:host {
  font-size: 0.75rem;
}

sup {
  line-height: 1rem;
  font-size: 0.75rem;
  position: relative;
  top: -.5rem;
  vertical-align: baseline;
}

span {
  color: hsla(206, 90%, 20%, 0.7);
  cursor: default;
}

.footnote-container {
  padding: 10px;
}

</style>

<sup>
  <span id="fn-" data-hover-ref=""></span>
</sup>

<d-hover-box>
  <div class="footnote-container">
    <slot id="slot"></slot>
  </div>
</d-hover-box>

`);

export class Footnote extends T(HTMLElement) {

  constructor() {
    super();

    const options = {childList: true, characterData: true, subtree: true};
    const observer = new MutationObserver(this.notify);
    observer.observe(this, options);
  }

  notify() {
    const options = { detail: this, bubbles: true };
    const event = new CustomEvent('onFootnoteChanged', options);
    document.dispatchEvent(event);
  }

  connectedCallback() {
    // listen and notify about changes to slotted content
    // const slot = this.shadowRoot.querySelector('#slot');
    // console.warn(slot.textContent);
    // slot.addEventListener('slotchange', this.notify);
    this.hoverBox = this.root.querySelector('d-hover-box');
    window.customElements.whenDefined('d-hover-box').then(() => {
      this.hoverBox.listen(this);
    });
    // create numeric ID
    Footnote.currentFootnoteId += 1;
    const IdString = Footnote.currentFootnoteId.toString();
    this.root.host.id = 'd-footnote-' + IdString;

    // set up hidden hover box
    const id = 'dt-fn-hover-box-' + IdString;
    this.hoverBox.id = id

    // set up visible footnote marker
    const span = this.root.querySelector('#fn-');
    span.setAttribute('id', 'fn-' + IdString);
    span.setAttribute('data-hover-ref', id);
    span.textContent = IdString;
  }

}

Footnote.currentFootnoteId = 0;
