import { Template } from '../mixins/template';
import { body } from '../helpers/layout';

const T = Template('d-figure-caption', `
<style>
  :host {
  /*
    font-size: 1.25rem;
    line-height: 1.6em;
    color: rgba(0, 0, 0, 0.7);
    */
    /*-webkit-font-smoothing: antialiased;*/
    display: block;
    text-align: center;
  }

  :host .figure-caption {
    counter-increment: figure-caption;
  }

  :host .figure-caption::after {
    content: " " counter(figure-caption) ":";
  }

  ::slotted(p) {
    margin-top: 0;
    margin-bottom: 1em;
    grid-column: text;
  }
  ${body('d-abstract')}
</style>

<span class="figure-caption">Figure</span>
<slot></slot>
`);

export class FigureCaption extends T(HTMLElement) {

}
