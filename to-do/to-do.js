const fs = require('fs');

//example with file system.
//let todo_list = JSON.parse(fs.readFileSync('db/data.json'));
let todo_list = [];

const loadDb = ()=>{
    try {
        todo_list = require('../db/data.json');
    }catch (e) {
        todo_list = [];
    }
};

const saveDb = ()=>{
    let data = JSON.stringify(todo_list);
    fs.writeFile('db/data.json',data,'utf8',(err)=>{
        if(err) throw new Error('no save the task', err);
    })
};

const create = (description)=>{
    loadDb();

    let todo = {
        description,
        complete:false
    };

    todo_list.push(todo);
    saveDb();

    return todo;
};


module.exports = {
    create
};