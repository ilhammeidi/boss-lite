import { fromJS } from 'immutable';

export default function clientMiddleware(client) {
  return ({ dispatch, getState }) =>
    next => (action) => {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }
      const { promise, types, ...rest } = action; // eslint-disable-line no-redeclare
      if (!promise) {
        return next(action);
      }

      const [REQUEST, SUCCESS, FAILURE] = types;
      next({ ...rest, type: REQUEST });

      const actionPromise = promise(client);
      actionPromise.then(
        result => next({ ...rest, result: fromJS(result.data), type: SUCCESS }),
        ({ response = {} }) => next({ ...rest, error: fromJS(response.data), type: FAILURE })
      ).catch(({ response = {} }) => {
        console.error('MIDDLEWARE ERROR:', response);
        next({ ...rest, error: fromJS(response.data), type: FAILURE });
      });
      return actionPromise;
    };
}
