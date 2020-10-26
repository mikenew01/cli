module.exports = {

    template: function(name) {

      const NAME_CAPIT = name.charAt(0).toUpperCase() + name.substr(1);
  
      return `
      import {Injectable} from '@angular/core';
      import {Resolve} from '@angular/router';
      import {select, Store} from '@ngrx/store';
      import {Observable} from 'rxjs';
      import {filter, take} from 'rxjs/operators';
      import {select${NAME_CAPIT}Loaded} from '../selectors/${name}.selector';
      import {GetAll${NAME_CAPIT}s} from '../actions/${name}.actions';
      import * as from${NAME_CAPIT} from '../reducers/${name}.reducer';
      
      @Injectable()
      export class ${NAME_CAPIT}ListResolver implements Resolve<boolean> {
        constructor(private store: Store<from${NAME_CAPIT}.State>) {
        }
      
        resolve(): Observable<boolean> {
          const loaded$ = this.store.pipe(select(select${NAME_CAPIT}Loaded));
      
          return loaded$.pipe(
            filter(loaded => {
              if (loaded === false) {
                this.store.dispatch(new GetAll${NAME_CAPIT}s());
              }
      
              return loaded;
            }),
            take(1)
          );
        }
      }
      
      `;
  
    }
  
  };
