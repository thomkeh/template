export function headerTemplate(frontMatter) {
  return `
  <p>${frontMatter.header ? frontMatter.header : ''}</p>
`;
}

export class Header extends HTMLElement {

  static get is() { return 'd-header'; }

  set frontMatter(frontMatter) {
    this.innerHTML = headerTemplate(frontMatter);
  }

}
