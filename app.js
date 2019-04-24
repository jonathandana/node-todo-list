//const argv = require('yargs').argv;
const {argv} = require('./config/yargs');
const to_do = require('./to-do/to-do');
const colors  = require('colors');

let command = argv._[0];

switch (command) {
    case  'create':
        let task = to_do.create(argv.description);
        console.log(task);
        break;

    case 'list':
            let list = to_do.getList();

            for(let task of list){
                console.log('=========Task==========='.green);
                console.log(task.description);
                console.log(`status: ${task.complete}`);
                console.log('========================'.green);
            }
        break;

    case  'update':
       to_do.updateTask(argv.description,argv.complete);
        break;

    case 'delete':
            console.log(to_do.deleteTask(argv.description));

        break;

    default:
        console.log('Command not found please check (--help)');

}