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

const T = Template('d-appendix', `
<style>

d-appendix {
  contain: layout style;
  font-size: 1rem;
  line-height: 1.6rem;
  /*margin: 0;*/
  /*border-top: 1px solid rgba(0, 0, 0, 0.1);*/
  /*color: rgba(0,0,0,0.7);*/
    color: black;
  padding: 0;
}

d-appendix h3 {
  font-family: "Times New Roman SC";
  font-size: 1.2rem;
  /*font-weight: 500;*/
  font-weight: normal;
  margin-top: 1em;
  margin-bottom: 0;
  /*color: rgba(0,0,0,0.65);*/
  color: black;
}

@media print {

  d-appendix h3 {
  }
}

d-appendix h3 + * {
  margin-top: 1em;
}

d-appendix ol {
  padding: 0 0 0 1.8rem;
  margin-left: 0;
}

@media (min-width: 768px) {
  d-appendix ol {
    padding: 0 0 0 30px;
    margin-left: -30px;
  }
}

d-appendix li {
  margin-bottom: 1em;
}

d-appendix a {
  color: rgba(0, 0, 0, 0.6);
}

d-appendix > * {
  grid-column: text;
}

d-appendix > d-footnote-list,
d-appendix > d-citation-list,
d-appendix > distill-appendix {
  grid-column: screen;
}

</style>

`, false);

export class Appendix extends T(HTMLElement) {

}
