module.exports = {

    template: function(name) {

      const NAME_CAPIT = name.charAt(0).toUpperCase() + name.substr(1);
      const NAME_UPPER = name.toUpperCase();
  
      return `
      import {Injectable} from '@angular/core';

      import {Actions, Effect, ofType} from '@ngrx/effects';
      import {catchError, map, mergeMap, switchMap, tap} from 'rxjs/operators';
      import {of} from 'rxjs';
      import {${NAME_CAPIT}Service} from '../../services/${name}.service';
      import {
        Create${NAME_CAPIT},
        Create${NAME_CAPIT}Success,
        Delete${NAME_CAPIT},
        Delete${NAME_CAPIT}Success,
        GetAll${NAME_CAPIT}s,
        GetAll${NAME_CAPIT}sSuccess,
        Get${NAME_CAPIT},
        Get${NAME_CAPIT}Success,
        MessageError,
        MessageSuccess,
        ${NAME_CAPIT}ActionTypes,
        Update${NAME_CAPIT},
        Update${NAME_CAPIT}Success
      } from '../actions/${name}.actions';

      import { ${NAME_CAPIT} } from 'src/app/shared/models/${name}.model';
      //import {NotificationService} from '../../../../core/services/notification.service';
      
      @Injectable()
      export class ${NAME_CAPIT}Effects {
      
        constructor(private actions$: Actions,
                    private ${name}Service: ${NAME_CAPIT}Service,
                    //private notificationService: NotificationService
                    ) {
        }
      
        @Effect()
        getAll${NAME_CAPIT}s$ = this.actions$.pipe(
          ofType(${NAME_CAPIT}ActionTypes.GET_ALL_${NAME_UPPER}S),
          switchMap((action: GetAll${NAME_CAPIT}s) => this.${name}Service.findAll().pipe(
            map((res: ${NAME_CAPIT}[]) => new GetAll${NAME_CAPIT}sSuccess({${name}s: res})),
            catchError(error => of(new MessageError({message: error.error[0].msg, locationBack: false})))
            )
          )
        );
      
        @Effect()
        get${NAME_CAPIT}$ = this.actions$.pipe(
          ofType(${NAME_CAPIT}ActionTypes.GET_${NAME_UPPER}),
          switchMap((action: Get${NAME_CAPIT}) =>
            this.${name}Service.get(action.payload.id).pipe(
              map((res: ${NAME_CAPIT}) => new Get${NAME_CAPIT}Success({${name}: res})),
              catchError(error => of(new MessageError({message: error.error[0].msg, locationBack: false})))
            )
          )
        );
      
        @Effect()
        update${NAME_CAPIT}$ = this.actions$.pipe(
          ofType(${NAME_CAPIT}ActionTypes.UPDATE_${NAME_UPPER}),
          switchMap((action: Update${NAME_CAPIT}) =>
            this.${name}Service.update(action.payload.${name}).pipe(
              mergeMap((res: ${NAME_CAPIT}) => [
                new Update${NAME_CAPIT}Success({${name}: res})
                //, new MessageSuccess({message: res.mensage})
              ]),
              catchError(error => of(new MessageError({message: error.error[0].msg, locationBack: false})))
            )
          )
        );
      
        @Effect()
        create${NAME_CAPIT}$ = this.actions$.pipe(
          ofType(${NAME_CAPIT}ActionTypes.CREATE_${NAME_UPPER}),
          switchMap((action: Create${NAME_CAPIT}) =>
            this.${name}Service.save(action.payload.${name}).pipe(
              mergeMap((res: ${NAME_CAPIT}) => [
                new Create${NAME_CAPIT}Success({${name}: res})
                //, new MessageSuccess({message: res.mensage})
              ]),
              catchError(error => of(new MessageError({message: error.error[0].msg, locationBack: false})))
            )
          )
        );
      
        @Effect()
        delete${NAME_CAPIT}$ = this.actions$.pipe(
          ofType(${NAME_CAPIT}ActionTypes.DELETE_${NAME_UPPER}),
          switchMap((action: Delete${NAME_CAPIT}) =>
            this.${name}Service.delete(action.payload.id).pipe(
              mergeMap((res: ${NAME_CAPIT}) => [
                new Delete${NAME_CAPIT}Success({id: res.id}),
                new GetAll${NAME_CAPIT}s()
                //, new MessageSuccess({message: res.mensage})
              ]),
              catchError(error => of(new MessageError({message: error.error[0].msg, locationBack: true})))
            )
          )
        );
      
        //Add servico de notificacao
        //@Effect({dispatch: false})
        //notificationSuccess$ = this.actions$.pipe(
        //  ofType(${NAME_CAPIT}ActionTypes.MESSAGE_SUCCESS),
        //  tap((action: MessageSuccess) => this.notificationService.success(action.payload.message, true))
        //);
      

        //Add servico de notificacao
        //@Effect({dispatch: false})
        //notificationError$ = this.actions$.pipe(
        //  ofType(${NAME_CAPIT}ActionTypes.MESSAGE_ERROR),
        //  tap((action: MessageError) => this.notificationService.error(action.payload.message, action.payload.locationBack))
        //);
      }
      
      `;
  
    }
  
  };
  
  
  