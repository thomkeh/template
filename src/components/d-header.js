export function headerTemplate(frontMatter) {
  return `
  <div class="header">
      ${frontMatter.published ? frontMatter.published : ''}
  </div>
`;
}

export class Header extends HTMLElement {

  static get is() { return 'd-header'; }

  set frontMatter(frontMatter) {
    this.innerHTML = headerTemplate(frontMatter);
  }

}
