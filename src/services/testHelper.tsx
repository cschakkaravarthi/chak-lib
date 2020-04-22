/* eslint @typescript-eslint/no-explicit-any: "off" */
// In this one file we do actually want to use the "any" type. This is a very generic function.

import ShallowRenderer from 'react-test-renderer/shallow';

export const shallowRender = (toRender: any): Record<string, any> => {
  const renderer = ShallowRenderer.createRenderer();
  renderer.render(toRender);
  return renderer.getRenderOutput();
};
