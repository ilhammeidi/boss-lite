import { fromJS, List } from 'immutable';
import { TOGGLE_TREE } from '../../actions/actionTypes';

const initialState = {
  treeOpen: List([]),
  arrowMore: List([])
};

const initialImmutableState = fromJS(initialState);

// Collect existing child and parent id's
function collectId(id, listedId, collapsed, arrowLess) {
  arrowLess.push(id);
  for (let i = 0; i < listedId.size; i += 1) {
    if (listedId.getIn([i]).startsWith(id + '_')) {
      collapsed.push(listedId.getIn([i]));
      arrowLess.push(listedId.getIn([i]));
    }
  }
}

export default function reducer(state = initialImmutableState, action = {}) {
  const { branch } = action;
  switch (action.type) {
    case `${branch}/${TOGGLE_TREE}`:
      return state.withMutations((mutableState) => {
        const listedId = state.get('treeOpen');
        const collapsed = [];
        const arrowLess = [];

        // Collect existing id
        collectId(action.keyID, listedId, collapsed, arrowLess);

        // Collapse and Expand row
        if (collapsed.length > 0) { // Collapse tree table
          mutableState.update('treeOpen', treeOpen => treeOpen.filter(x => collapsed.indexOf(x) < 0));
          mutableState.update('arrowMore', arrowMore => arrowMore.filter(x => arrowLess.indexOf(x) < 0));
        } else { // Expand tree table
          mutableState.update('arrowMore', arrowMore => arrowMore.push(action.keyID));
          action.child.map(item => {
            mutableState.update('treeOpen', treeOpen => treeOpen.push(item.id));
            return true;
          });
        }
      });
    default:
      return state;
  }
}
