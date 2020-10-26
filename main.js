const fs = require('fs');
const args = process.argv.slice(2);

const actionTemplate = require('./templates/action.template');
const modelTemplate = require('./templates/model.template');

function makeDirs(name) {
    fs.mkdirSync(`./src/app/features/${name}/components`, { recursive: true });
    fs.mkdirSync(`./src/app/features/${name}/services`, { recursive: true });
    fs.mkdirSync(`./src/app/features/${name}/containers`, { recursive: true });
    fs.mkdirSync(`./src/app/features/${name}/store/actions`, { recursive: true });
    fs.mkdirSync(`./src/app/features/${name}/store/effects`, { recursive: true });
    fs.mkdirSync(`./src/app/features/${name}/store/reducers`, { recursive: true });
    fs.mkdirSync(`./src/app/features/${name}/store/selectors`, { recursive: true });
    fs.mkdirSync(`./src/app/shared/models`, { recursive: true });
}

function generate(name) {
    makeDirs(name);

    fs.writeFileSync(`./src/app/shared/models/${name}.model.ts`, modelTemplate.template(name));
    fs.writeFileSync(`./src/app/features/${name}/store/actions/${name}.actions.ts`, actionTemplate.template(name));
}

generate(args[0]);