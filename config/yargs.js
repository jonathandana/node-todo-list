let options = {
    description:{
            demand : true,
            alias: 'd'
        }
    };


const argv = require('yargs')
        .command('create','Create Item in todo list',options)
        .command('update','Update In todo list',options)
        .help()
        .argv;




module.exports = {
    argv
};