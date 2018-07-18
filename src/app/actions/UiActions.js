import * as types from './actionTypes';

export const toggleAction = { type: types.TOGGLE_SIDEBAR };
export const openAction = initialLocation => ({
  type: types.OPEN_SUBMENU,
  initialLocation
});
export const changeThemeAction = theme => ({
  type: types.CHANGE_THEME,
  theme
});
export const playTransitionAction = isLoaded => ({
  type: types.LOAD_PAGE,
  isLoaded
});
