const fs = require('fs');

let todo_list = [];

const saveDb = ()=>{
    let data = JSON.stringify(todo_list);
    fs.writeFile('db/data.json',data,'utf8',(err)=>{
        if(err) throw new Error('no save the task', err);
    })
};

const create = (description)=>{
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