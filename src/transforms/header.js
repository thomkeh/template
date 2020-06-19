import { headerTemplate } from '../components/d-header.js';

export default function(dom, data) {
  const header = dom.querySelector('d-header');
  if (header) {
    header.innerHTML = headerTemplate(data);
  }
}
