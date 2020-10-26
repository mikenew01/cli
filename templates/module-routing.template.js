module.exports = {

    template: function(name) {

      const NAME_CAPIT = name.charAt(0).toUpperCase() + name.substr(1);
  
      return `
        import { NgModule } from '@angular/core';
        import { Routes, RouterModule } from '@angular/router';
        
        const routes: Routes = [];
        
        @NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
        export class ${NAME_CAPIT}RoutingModule { }
      
      `;
    }
  };
