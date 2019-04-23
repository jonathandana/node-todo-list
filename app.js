//const argv = require('yargs').argv;
const {argv} = require('./config/yargs');
const to_do = require('./to-do/to-do');

let command = argv._[0];

switch (command) {
    case  'create':
        let task = to_do.create(argv.description);
        break;

    case  'update':
        console.log('update');
        break;

    default:
        console.log('Command not found please check (--help)');

}