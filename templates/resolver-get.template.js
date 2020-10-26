module.exports = {

    template: function(name) {

      const NAME_CAPIT = name.charAt(0).toUpperCase() + name.substr(1);
  
      return `
        import {Injectable} from '@angular/core';
        import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
        import {select, Store} from '@ngrx/store';
        import {Observable} from 'rxjs';
        import {filter, take} from 'rxjs/operators';
        import {select${NAME_CAPIT}} from '../selectors/${name}.selector';
        import {Get${NAME_CAPIT}} from '../actions/${name}.actions';
        import {${NAME_CAPIT}} from '../../../../shared/models/${name}.model';

        @Injectable()
        export class ${NAME_CAPIT}GetResolver implements Resolve<${NAME_CAPIT}> {
        constructor(private store: Store<any>) {
        }

        resolve(route: ActivatedRouteSnapshot): Observable<${NAME_CAPIT}> {
            const entity$ = this.store.pipe(select(select${NAME_CAPIT}, {id: route.params.id}));

            return entity$.pipe(
            filter(entity => {
                if (!entity) {
                this.store.dispatch(new Get${NAME_CAPIT}({id: route.params.id}));
                }

                return !!entity;
            }),

            take(1)
            );
        }
        }
      
      `;
  
    }
  
  };
