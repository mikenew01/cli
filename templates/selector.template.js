module.exports = {

    template: function(name) {

      const NAME_CAPIT = name.charAt(0).toUpperCase() + name.substr(1);
  
      return `
        import {createFeatureSelector, createSelector,} from '@ngrx/store';
        import {adapter, ENTITY_FEATURE_KEY, State} from '../reducers/${name}.reducer';

        export const selectFeature = createFeatureSelector<State>(ENTITY_FEATURE_KEY);

        const {selectIds, selectAll, selectTotal} = adapter.getSelectors();

        export const select${NAME_CAPIT}Ids = createSelector(selectFeature, selectIds);

        export const selectAll${NAME_CAPIT}s = createSelector(selectFeature, selectAll);

        export const select${NAME_CAPIT}Count = createSelector(selectFeature, selectTotal);

        export const select${NAME_CAPIT}Loaded = createSelector(selectFeature, state => state.loaded);

        export const selectError = createSelector(selectFeature, state => state.error);

        export const select${NAME_CAPIT} = createSelector(selectFeature, (state: State, prop: { id?: string }) => state.entities[prop.id]);
      `;
  
    }
  
  };
