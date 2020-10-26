module.exports = {

    template: function(name) {

      const NAME_CAPIT = name.charAt(0).toUpperCase() + name.substr(1);
  
      return `
      import {Injectable} from '@angular/core';
      import {HttpClient} from '@angular/common/http';
      import {Observable} from 'rxjs';
      import {${NAME_CAPIT}} from '../../../shared/models/${name}.model';
      import {environment} from '../../../../environments/environment';
      
      @Injectable({
        providedIn: 'root'
      })
      export class ${NAME_CAPIT}Service {
      
        constructor(private http: HttpClient) {
        }
      
        public findAll(): Observable<${NAME_CAPIT}> {
          return this.http.get<${NAME_CAPIT}>('');
        }
      
        public save(${name}: ${NAME_CAPIT}): Observable<${NAME_CAPIT}> {
          return this.http.post<${NAME_CAPIT}>('', ${name});
        }
      
        public update(${name}: ${NAME_CAPIT}): Observable<${NAME_CAPIT}> {
          return this.http.put<${NAME_CAPIT}>('', ${name});
        }
      
        public delete(id: number): Observable<${NAME_CAPIT}> {
          return this.http.delete<${NAME_CAPIT}>('');
        }
      
        public get(id: number): Observable<${NAME_CAPIT}> {
          return this.http.get<${NAME_CAPIT}>('');
        }
      }
      
      `;
  
    }
  
  };
