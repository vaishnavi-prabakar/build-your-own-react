/** @jsx MiniReact.createElement */

import MiniReact from "./MiniReact";

// eslint-disable-next-line no-unused-vars
const example = <div id="my-div" title="my-title">Test</div>;

MiniReact.render(example, document.getElementById('root'))
