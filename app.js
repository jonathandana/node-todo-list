//const argv = require('yargs').argv;
const {argv} = require('./config/yargs');

let command = argv._[0];


switch (command) {
    case  'create':
        console.log('create');
        break;

    case  'update':
        console.log('update');
        break;

    default:
        console.log('Command not found please check --help');

}