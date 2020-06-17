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

export class TOC extends HTMLElement {

  static get is() { return 'd-toc'; }

  connectedCallback() {
    if (!this.getAttribute('prerendered')) {
      window.onload = () => {
        const article = document.querySelector('d-article');
        const headings = article.querySelectorAll('h2, h3');
        renderTOC(this, headings);
      };
    }
  }

}

export function renderTOC(element, headings) {

  let ToC =`
  <style>

  d-toc {
    contain: layout style;
    display: block;
    grid-column: text;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  d-toc ol {
    margin-top: 0.5rem;
    list-style-type: none;
    counter-reset: item;
    margin: 0;
    padding: 0;
  }
  
  d-toc ol > li {
    display: table;
    counter-increment: item;
    margin-bottom: 0.6em;
  }
  
  d-toc ol > li::before {
    content: counters(item, ".") " ";
    display: table-cell;
    padding-right: 0.6em;    
  }
  
  d-toc li ol > li {
    margin: 0;
  }
  
  d-toc li ol > li::before {
    content: counters(item, ".") " ";
  }

  d-toc a {
    border-bottom: none;
    text-decoration: none;
  }

  d-toc .toc-header {
    font-size: 1.5rem;
    font-weight: bold;
    padding-bottom: 1rem;
  }

  </style>
  <nav role="navigation" class="table-of-contents">
  <p class="toc-header">Contents</p>
  <ol>`;

  let isFirst = true;
  for (const el of headings) {
    // should element be included in TOC?
    const isInTitle = el.parentElement.tagName == 'D-TITLE';
    const isException = el.getAttribute('no-toc');
    const tagName = el.tagName;
    if (isInTitle || isException || (tagName !== 'H2' && tagName !== 'H3')) continue;
    // create TOC entry
    const title = el.textContent;
    const link = '#' + el.getAttribute('id');

    let newLine = '<a href="' + link + '">' + title + '</a>';
    if (tagName === 'H2') {
      newLine = '<li><b>' + newLine + '</b><ol>';
      if (isFirst) {
        isFirst = false;
      } else {
        newLine = '</ol></li>' + newLine
      }
    } else {
      // newLine += '<br>';
      newLine = '<li>' + newLine + '</li>';
    }
    ToC += newLine;

  }

  ToC += '</ol></nav>';
  element.innerHTML = ToC;
}
