const fs = require('fs');
const colors  = require('colors');


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

const getList = ()=> {
    loadDb();
    return todo_list;
};

const updateTask = (description,complete = true) =>{
    loadDb();
    let index = todo_list.findIndex(task => task.description === description);

    if(index === -1){
        console.log('not found the task'.red);
        return false;
    }

    todo_list[index].complete = complete;
    saveDb();
    return true;


};

const deleteTask = (description)=>{
    loadDb();
    let index = todo_list.findIndex(task => task.description === description);

    if(index === -1){
        console.log('not found the task'.red);
        return false;
    }
    todo_list.splice(index,1);
    saveDb();

    return true

};


module.exports = {
    create,
    getList,
    updateTask,
    deleteTask
};