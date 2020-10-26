const fs = require('fs');
const args = process.argv.slice(2);

const actionTemplate = require('./templates/action.template');
const modelTemplate = require('./templates/model.template');
const moduleRoutingTemplate = require('./templates/module-routing.template');
const moduleTemplate = require('./templates/module.template');
const serviceTemplate = require('./templates/service.template');
const reducerTemplate = require('./templates/reducer.template');
const selectorTemplate = require('./templates/selector.template');

const PATH_FEATURES = './src/app/features';
const PATH_SHARED = './src/app/shared/models';

function makeDirs(name) {
    fs.mkdirSync(`${PATH_FEATURES}/${name}/components`, { recursive: true });
    fs.mkdirSync(`${PATH_FEATURES}/${name}/services`, { recursive: true });
    fs.mkdirSync(`${PATH_FEATURES}/${name}/containers`, { recursive: true });
    fs.mkdirSync(`${PATH_FEATURES}/${name}/store/actions`, { recursive: true });
    fs.mkdirSync(`${PATH_FEATURES}/${name}/store/effects`, { recursive: true });
    fs.mkdirSync(`${PATH_FEATURES}/${name}/store/reducers`, { recursive: true });
    fs.mkdirSync(`${PATH_FEATURES}/${name}/store/selectors`, { recursive: true });
    fs.mkdirSync(`${PATH_SHARED}`, { recursive: true });
}

function generate(name) {
    makeDirs(name);

    fs.writeFileSync(`${PATH_SHARED}/${name}.model.ts`, modelTemplate.template(name));
    console.log(`CREATE ${PATH_SHARED}/${name}.model.ts`);

    fs.writeFileSync(`${PATH_FEATURES}/${name}/${name}-routing.module.ts`, moduleRoutingTemplate.template(name));
    console.log(`CREATE ${PATH_FEATURES}/${name}/${name}-routing.module.ts`)

    fs.writeFileSync(`${PATH_FEATURES}/${name}/${name}.module.ts`, moduleTemplate.template(name));
    console.log(`CREATE ${PATH_FEATURES}/${name}/${name}.module.ts`);

    fs.writeFileSync(`${PATH_FEATURES}/${name}/services/${name}.service.ts`, serviceTemplate.template(name));
    console.log(`CREATE ${PATH_FEATURES}/${name}/services/${name}.service.ts`);

    fs.writeFileSync(`${PATH_FEATURES}/${name}/store/actions/${name}.actions.ts`, actionTemplate.template(name));
    console.log(`CREATE ${PATH_FEATURES}/${name}/store/actions/${name}.actions.ts`);

    fs.writeFileSync(`${PATH_FEATURES}/${name}/store/reducers/${name}.reducer.ts`, reducerTemplate.template(name));
    console.log(`CREATE ${PATH_FEATURES}/${name}/store/reducers/${name}.reducer.ts`);

    fs.writeFileSync(`${PATH_FEATURES}/${name}/store/selectors/${name}.selector.ts`, selectorTemplate.template(name));
    console.log(`CREATE ${PATH_FEATURES}/${name}/store/selectors/${name}.selector.ts`)

}

generate(args[0]);