module.exports = {

    template: function(name) {

      const NAME_CAPIT = name.charAt(0).toUpperCase() + name.substr(1);
      const NAME_UPPER = name.toUpperCase();
  
      return `
        import {Action} from '@ngrx/store';
        import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
        import {${NAME_CAPIT}} from '../../../../shared/models/${name}.model';
        import {${NAME_CAPIT}ActionTypes} from '../actions/${name}.actions';

        export const ENTITY_FEATURE_KEY = '@store/key-${name}';

        export interface State extends EntityState<${NAME_CAPIT}> {
          loaded: boolean;
          error?: Error | any;
        }

        export const adapter: EntityAdapter<${NAME_CAPIT}> = createEntityAdapter<${NAME_CAPIT}>({
          
        });

        export const initialState: State = adapter.getInitialState({
          loaded: false,
          error: null
        });

        export function _reducer(
          state = initialState,
          action: any
        ) {
        switch (action.type) {
            case ${NAME_CAPIT}ActionTypes.GET_ALL_${NAME_UPPER}S_SUCCESS: {
              return adapter.addAll(action.payload.${name}s, {...state, loaded: true});
            }

            case ${NAME_CAPIT}ActionTypes.GET_${NAME_UPPER}_SUCCESS: {
              return adapter.addOne(action.payload.${name}, state);
            }

            case ${NAME_CAPIT}ActionTypes.UPDATE_${NAME_UPPER}_SUCCESS: {
              return adapter.updateOne({id: action.payload.${name}.id, changes: action.payload.${name}}, state);
            }

            case ${NAME_CAPIT}ActionTypes.CREATE_${NAME_UPPER}_SUCCESS: {
              return adapter.addOne(action.payload.${name}, state);
            }

            case ${NAME_CAPIT}ActionTypes.DELETE_${NAME_UPPER}_SUCCESS: {
              return adapter.removeOne(action.payload.id, state);
            }

            default: {
              return state;
            }
          }
        }

        export function ${name}Reducer(state: State | undefined, action: Action) {
          return _reducer(state, action);
        }
      `;
  
    }
  
  };
