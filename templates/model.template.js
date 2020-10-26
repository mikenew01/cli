module.exports = {

    template: function(name) {

      const NAME_CAPIT = name.charAt(0).toUpperCase() + name.substr(1);
  
      return `
        export interface ${NAME_CAPIT} {
        
        }
      
      `;
  
    }
  
  };
  
  
  