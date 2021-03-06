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

import { Template } from '../mixins/template';
import { body } from '../helpers/layout';

const T = Template('d-abstract', `
<style>
  :host {
    font-size: 1.0rem;
    line-height: 1.4rem;
    /* color: rgba(0, 0, 0, 0.7); */
    /* -webkit-font-smoothing: antialiased; */
  }

  :host h3 {
    grid-column: text;
    text-align: center;
    margin-bottom: 0.5rem;
    font-family: 'Times New Roman SC', serif;
    font-weight: normal;
  }

  ::slotted(p) {
    margin-top: 0;
    margin-bottom: 1em;
    grid-column: text;
    padding-left: 4rem;
    padding-right: 4rem;
  }
  ${body('d-abstract')}
</style>

<h3 class="abstract">Abstract</h3>
<slot></slot>
`);

export class Abstract extends T(HTMLElement) {

}
