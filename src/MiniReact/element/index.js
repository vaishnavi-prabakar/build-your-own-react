/**
 * @param {string} type - the node type
 * @param {?object} configObject - the props
 * @param  {...any} args - the children array
 * @returns {object} - to be used by render
 */
export function createElement(type, configObject, ...args) {
  console.log({
    type,
    configObject,
    args,
  });
  const children = args.length > 0 ? [...args] :[];
  const props = {
    ...configObject,
    children: children
  }
  return {type: type, props: props};
}
