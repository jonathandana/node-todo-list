const description = {
    demand : true,
    alias: 'd'
};

const complete ={
    alias:'c',
    default:true
};

const argv = require('yargs')
        .command('create','Create Item in todo list',{description})
        .command('update','Update In todo list',{description,complete})
        .command('delete','Update In todo list',{description})
        .command('list','print todo list')
        .help()
        .argv;




module.exports = {
    argv
};