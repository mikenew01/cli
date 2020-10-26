const { exec } = require('child_process');
const { stderr } = require('process');

module.exports = {

    execute: function(name) {

      const NAME_CAPIT = name.charAt(0).toUpperCase() + name.substr(1);
  
      exec(`ng g m ./features/${NAME_CAPIT} --routing`, (err, stdout, stderr) => {
          if(err) {
              return;
          }

          console.log(`log: ${stdout}`);
          console.log(`log: ${stderr}`);
      });
  
    }
  
  };
