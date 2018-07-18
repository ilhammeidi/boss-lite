import * as types from './actionTypes';

const openAction = (keyID, child, branch) => ({
  branch,
  type: `${branch}/${types.TOGGLE_TREE}`,
  keyID,
  child
});

export default openAction;
