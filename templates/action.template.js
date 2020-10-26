module.exports = {

  template: function(name) {

    const NAME_UPPER = name.toUpperCase();
    const NAME_CAPIT = name.charAt(0).toUpperCase() + name.substr(1);

    return `
    
    import {Action} from '@ngrx/store';
    import {${NAME_CAPIT}} from '../../../../shared/models/${name}.model';
    
    export enum ${NAME_CAPIT}ActionTypes {
      GET_ALL_${NAME_UPPER}S = '@${name}/GET_ALL_${NAME_UPPER}S',
      GET_ALL_${NAME_UPPER}S_SUCCESS = '@${name}/GET_ALL_${NAME_UPPER}S_SUCCESS',
    
      GET_${NAME_UPPER} = '@${name}/GET_${NAME_UPPER}',
      GET_${NAME_UPPER}_SUCCESS = '@${name}/GET_${NAME_UPPER}_SUCCESS',
    
      UPDATE_${NAME_UPPER} = '@${name}/UPDATE_${NAME_UPPER}',
      UPDATE_${NAME_UPPER}_SUCCESS = '@${name}/UPDATE_${NAME_UPPER}_SUCCESS',
    
      CREATE_${NAME_UPPER} = '@${name}/CREATE_${NAME_UPPER}',
      CREATE_${NAME_UPPER}_SUCCESS = '@${name}/CREATE_${NAME_UPPER}_SUCCESS',
    
      DELETE_${NAME_UPPER} = '@${name}/DELETE_${NAME_UPPER}',
      DELETE_${NAME_UPPER}_SUCCESS = '@${name}/DELETE_${NAME_UPPER}_SUCCESS',
    
      MESSAGE_SUCCESS = '@${name}/MESSAGE_SUCCESS',
      MESSAGE_ERROR = '@${name}/MESSAGE_ERROR'
    }
    
    export class GetAll${NAME_CAPIT}s implements Action {
      readonly type = ${NAME_CAPIT}ActionTypes.GET_ALL_${NAME_UPPER}S;
    
      constructor() {
      }
    }
    
    export class GetAll${NAME_CAPIT}sSuccess implements Action {
      readonly type = ${NAME_CAPIT}ActionTypes.GET_ALL_${NAME_UPPER}S_SUCCESS;
    
      constructor(public payload: { ${name}s: ${NAME_CAPIT}[] }) {
      }
    }
    
    export class Get${NAME_CAPIT} implements Action {
      readonly type = ${NAME_CAPIT}ActionTypes.GET_${NAME_UPPER};
    
      constructor(public payload: { id: number }) {
      }
    }
    
    export class Get${NAME_CAPIT}Success implements Action {
      readonly type = ${NAME_CAPIT}ActionTypes.GET_${NAME_UPPER}_SUCCESS;
    
      constructor(public payload: { ${name}: ${NAME_CAPIT} }) {
      }
    }
    
    export class Update${NAME_CAPIT} implements Action {
      readonly type = ${NAME_CAPIT}ActionTypes.UPDATE_${NAME_UPPER};
    
      constructor(public payload: { ${name}: ${NAME_CAPIT} }) {
      }
    }
    
    export class Update${NAME_CAPIT}Success implements Action {
      readonly type = ${NAME_CAPIT}ActionTypes.UPDATE_${NAME_UPPER}_SUCCESS;
    
      constructor(public payload: { ${name}: ${NAME_CAPIT} }) {
      }
    }
    
    export class Create${NAME_CAPIT} implements Action {
      readonly type = ${NAME_CAPIT}ActionTypes.CREATE_${NAME_UPPER};
    
      constructor(public payload: { ${name}: ${NAME_CAPIT} }) {
      }
    }
    
    export class Create${NAME_CAPIT}Success implements Action {
      readonly type = ${NAME_CAPIT}ActionTypes.CREATE_${NAME_UPPER}_SUCCESS;
    
      constructor(public payload: { ${name}: ${NAME_CAPIT} }) {
      }
    }
    
    export class Delete${NAME_CAPIT} implements Action {
      readonly type = ${NAME_CAPIT}ActionTypes.DELETE_${NAME_UPPER};
    
      constructor(public payload: { id: number }) {
      }
    }
    
    export class Delete${NAME_CAPIT}Success implements Action {
      readonly type = ${NAME_CAPIT}ActionTypes.DELETE_${NAME_UPPER}_SUCCESS;
    
      constructor(public payload: { id: number }) {
      }
    }
    
    export class MessageSuccess implements Action {
      readonly type = ${NAME_CAPIT}ActionTypes.MESSAGE_SUCCESS;
    
      constructor(public payload: { message: string }) {
      }
    }
    
    export class MessageError implements Action {
      readonly type = ${NAME_CAPIT}ActionTypes.MESSAGE_ERROR;
    
      constructor(public payload: { message: string, locationBack: boolean }) {
      }
    }
    
    export const from${NAME_CAPIT}Actions = {
      GetAll${NAME_CAPIT}s,
      GetAll${NAME_CAPIT}sSuccess,
      Update${NAME_CAPIT},
      Update${NAME_CAPIT}Success,
      Create${NAME_CAPIT},
      Create${NAME_CAPIT}Success,
      Delete${NAME_CAPIT},
      Delete${NAME_CAPIT}Success,
      MessageError
    };
    
    `;

  }

};


